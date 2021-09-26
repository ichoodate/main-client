import { Component } from '@angular/core';
import * as moment from 'moment';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CardGroup } from 'src/app/model/card-group';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'matching-today-content',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
})
export class MatchingTodayContentComponent {
  private group?: CardGroup;

  constructor() {
    HttpService.api()
      .get<CardGroup[]>('card-groups', {
        params: {
          after: moment(new Date()).format('YYYY-MM-DD 00:00:00'),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      })
      .pipe(
        switchMap((groups: CardGroup[]) => {
          if (groups.length == 0) {
            return HttpService.api().post<CardGroup>('card-groups', {
              type: 'daily',
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            });
          }

          return of(groups[0]);
        })
      )
      .subscribe((group: CardGroup) => {
        this.group = group;
      });
  }

  getGroup() {
    return this.group;
  }
}
