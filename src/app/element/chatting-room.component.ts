import { Component, ElementRef, Input, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Params } from '@angular/router';
import * as _ from 'lodash';
import { map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { HttpService } from 'src/app/service/http.service';
import { ChattingContent } from './../model/chatting-content';

@Component({
  selector: 'chatting-room',
  templateUrl: './chatting-room.component.html',
  styleUrls: ['./chatting-room.component.scss'],
})
export class ChattingRoomComponent {
  @Input()
  public match_id: string = '';
  public messageCtrl: FormControl;
  public authUser: User;
  public chattings: ChattingContent[] = [];
  public hostRef: ElementRef;
  public loadChatInterval: NodeJS.Timeout | null;
  public shouldLoad: {
    prev: true | false;
    next: true | false;
  } = { prev: false, next: false };

  public constructor(hostRef: ElementRef) {
    this.authUser = AuthService.getUser();
    this.hostRef = hostRef;
    this.loadChatInterval = null;
    this.messageCtrl = new FormControl('', [Validators.required]);
  }

  public ngOnInit() {
    // this.loadChatInterval = setInterval(() => {
    //   if (this.shouldLoad.prev) {
    //     this.shouldLoad.prev = false;
    //     this.getMoreChattings('prev');
    //   }
    //   if (this.shouldLoad.next) {
    //     this.shouldLoad.next = false;
    //     this.getMoreChattings('next');
    //   }
    // }, 1000);
  }

  public ngOnDestroy() {
    // clearInterval(this.loadChatInterval as NodeJS.Timeout);
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.match_id.currentValue != changes.match_id.previousValue) {
      this.chattings = [];
      this.getMoreChattings('prev');
    }
  }

  public ngAfterViewInit() {
    const el = this.hostRef.nativeElement.querySelector(
      '#chat-msg-list'
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
      expands: ['match.user, writer'],
      match_id: this.match_id,
      order_by: 'created_at ' + (type == 'prev' ? 'desc' : 'asc'),
    };

    if (type == 'prev' && this.chattings.length !== 0) {
      params.cursor_id = _.first(this.chattings)?.getAttrs().id;
    } else if (type == 'next' && this.chattings.length !== 0) {
      params.cursor_id = _.last(this.chattings)?.getAttrs().id;
    }

    HttpService.api()
      .get<ChattingContent[]>('chatting-contents', {
        params: params,
      })
      .subscribe((chattings: ChattingContent[]) => {
        chattings.forEach((chatting: ChattingContent) => {
          if (type == 'prev') {
            this.chattings.unshift(chatting);
          } else {
            this.chattings.push(chatting);
          }
        });

        this.chattings = [...this.chattings];
        console.log(this.chattings);
      });
  }

  public trackById(i: number, v: ChattingContent) {
    return v.getAttrs().id;
  }

  public addChat() {
    if (this.messageCtrl.valid) {
      HttpService.api()
        .post<ChattingContent>('chatting-contents', {
          match_id: this.match_id,
          message: this.messageCtrl.value,
        })
        .pipe(
          switchMap((chatting: ChattingContent) => {
            return HttpService.api().get<ChattingContent>(
              'chatting-contents/' + chatting.getAttrs().id,
              {
                params: {
                  expands: ['match.user, writer'],
                },
              }
            );
          }),
          map((chatting: ChattingContent) => {
            this.chattings.push(chatting);
            this.chattings = [...this.chattings];
          })
        )
        .subscribe();
    }
  }
}
