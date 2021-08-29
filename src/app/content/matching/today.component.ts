import { Component } from '@angular/core';
import * as _ from 'lodash';
import { User } from 'src/app/model/user';

@Component({
  selector: 'matching-today-content',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
})
export class MatchingTodayContentComponent {
  private users: User[];

  constructor() {
    this.users = _.range(1, 5).map((n) => {
      return new User({ id: String(n) });
    });
  }

  getUsers() {
    return this.users;
  }
}
