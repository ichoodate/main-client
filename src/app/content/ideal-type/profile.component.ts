import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdealTypeKeyword } from 'src/app/model/ideal-type-keyword';
import { ProfileDataService } from 'src/app/service/profile-data.service';

@Component({
  selector: 'ideal-type-profile-content',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class IdealTypeProfileContentComponent {
  public readonly keywords: IdealTypeKeyword[];
  public readonly profileType: string;

  public constructor(route: ActivatedRoute) {
    this.keywords = route.snapshot.data.keywords;
    this.profileType = route.snapshot.data.profileType;
  }

  public getData(
    label:
      | 'age-range'
      | 'hobby'
      | 'nationality'
      | 'religion'
      | 'residence'
      | 'stature-range'
      | 'weight-range'
  ) {
    return ProfileDataService.getData(this.keywords)[label];
  }

  public getLabels(): [
    'age-range',
    'hobby',
    'nationality',
    'religion',
    'residence',
    'stature-range',
    'weight-range'
  ] {
    return [
      'age-range',
      'hobby',
      'nationality',
      'religion',
      'residence',
      'stature-range',
      'weight-range',
    ];
  }
}
