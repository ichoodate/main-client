import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'user-list-content',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class UserListContentComponent {
  private users: User[];

  public constructor(route: ActivatedRoute) {
    this.users = _.range(1, 5).map((n) => new User({ id: String(n) }));
  }

  getUsers() {
    return this.users;
  }
}
