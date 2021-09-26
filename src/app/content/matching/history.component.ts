import { Component } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import { CardGroup } from 'src/app/model/card-group';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'matching-history-content',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class MatchingHistoryContentComponent {
  private groups: CardGroup[] = [];

  constructor() {
    this.getMoreCardGroup();
  }

  getCardGroups() {
    return this.groups;
  }

  getMoreCardGroup() {
    let params: { [key: string]: string | number } = {
      before: moment(new Date())
        .subtract(1, 'day')
        .format('YYYY-MM-DD HH:mm:ss'),
      limit: 5,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    if (this.groups.length !== 0) {
      params.cursor_id = (_.last(this.groups) as CardGroup).getAttrs().id;
    }

    HttpService.api()
      .get<CardGroup[]>('card-groups', {
        params: params,
      })
      .subscribe((groups: CardGroup[]) => {
        groups.forEach((group: CardGroup) => {
          this.groups.push(group);
        });
      });
  }
}
