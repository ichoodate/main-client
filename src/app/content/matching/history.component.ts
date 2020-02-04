import * as _ from 'lodash';
import { Component } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'matching-history-content',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class MatchingHistoryContentComponent {

  constructor() {

  }

  getUsers() {
    return _.range(0, 12).map(n => new User({ id: String(n) }));
  }

}
