import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import * as _ from 'lodash';
import { HttpService } from 'src/app/service/http.service';

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
