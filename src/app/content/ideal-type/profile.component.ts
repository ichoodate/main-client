import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserIdealTypeKwdPvt } from 'src/app/model/user-ideal-type-kwd-pvt';
import { ProfileDataService } from 'src/app/service/profile-data.service';

@Component({
  selector: 'ideal-type-profile-content',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class IdealTypeProfileContentComponent {
  public readonly data: {};
  public readonly keywords: UserIdealTypeKwdPvt[];
  public readonly profileType: string;

  public constructor(route: ActivatedRoute) {
    this.keywords = route.snapshot.data.keywords;
    this.profileType = route.snapshot.data.profileType;
    this.data = ProfileDataService.getData(this.keywords);
  }

  public getLabels() {
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
