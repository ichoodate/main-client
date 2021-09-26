import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'user-list-content',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class UserListContentComponent {
  public users: User[] = [];

  public constructor(route: ActivatedRoute) {
    this.getMoreUsers();
  }

  public getMoreUsers() {
    HttpService.api()
      .get<User[]>('matching-users', {
        params: {
          strict: false,
        },
      })
      .subscribe((users: User[]) => {
        users.forEach((group: User) => {
          this.users.push(group);
        });
      });
  }
}
