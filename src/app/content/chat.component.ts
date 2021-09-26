import { Component, ElementRef } from '@angular/core';
import { Params } from '@angular/router';
import * as _ from 'lodash';
import { ChattingContent } from 'src/app/model/chatting-content';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'chat-content',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatContentComponent {
  public authUser: User;
  public hostRef: ElementRef;
  public loadChatInterval: NodeJS.Timeout | null;
  public newChatInterval: NodeJS.Timeout | null;
  public chats: ChattingContent[] = [];
  public match_id: string = '';
  public shouldLoad: {
    prev: true | false;
    next: true | false;
  } = { prev: false, next: false };

  public constructor(hostRef: ElementRef) {
    this.authUser = AuthService.getUser();
    this.hostRef = hostRef;
    this.newChatInterval = null;
    this.loadChatInterval = null;
  }

  public ngOnInit() {
    this.getMoreChattings('prev');

    this.loadChatInterval = setInterval(() => {
      if (this.shouldLoad.prev) {
        this.shouldLoad.prev = false;
        this.getMoreChattings('prev');
      }
      if (this.shouldLoad.next) {
        this.shouldLoad.next = false;
        this.getMoreChattings('next');
      }
    }, 1000);

    this.newChatInterval = setInterval(() => {
      this.getMoreChattings('next');
    }, 3000);
  }

  public ngOnDestroy() {
    clearInterval(this.loadChatInterval as NodeJS.Timeout);
    clearInterval(this.newChatInterval as NodeJS.Timeout);
  }

  public ngAfterViewInit() {
    const el = this.hostRef.nativeElement.querySelector(
      '#chat-user-list'
    ) as HTMLElement;

    el.addEventListener('scroll', () => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        el.scrollTop = el.scrollHeight - el.clientHeight - 1;
        this.shouldLoad.next = true;
      } else if (el.scrollTop == 0) {
        el.scrollTop = 2;
        this.shouldLoad.prev = true;
      }
    });
  }

  public getMoreChattings(type: 'prev' | 'next') {
    const params: Params = {
      type: 'friend',
      expands: ['match.user'],
      order_by: 'created_at ' + (type == 'prev' ? 'desc' : 'asc'),
      group_by: 'match_id',
    };

    if (type == 'prev' && this.chats.length !== 0) {
      params.cursor_id = _.last(this.chats)?.getAttrs().id;
    } else if (type == 'next' && this.chats.length !== 0) {
      params.cursor_id = _.first(this.chats)?.getAttrs().id;
    }

    HttpService.api()
      .get<ChattingContent[]>('chatting-contents', {
        params: params,
      })
      .subscribe((newChats: ChattingContent[]) => {
        (type == 'prev' ? newChats : _.reverse(newChats)).forEach(
          (newChat: ChattingContent) => {
            this.chats.forEach((chat: ChattingContent, i) => {
              if (chat.getAttrs().match_id == newChat.getAttrs().match_id) {
                this.chats.splice(i, 1);
              }
            });

            if (type == 'next') {
              this.chats.unshift(newChat);
            } else {
              this.chats.push(newChat);
            }
          }
        );

        if (!this.match_id && this.chats.length !== 0) {
          this.match_id = this.chats[0].getAttrs().match_id;
        }

        this.chats = [...this.chats];
      });
  }
}
