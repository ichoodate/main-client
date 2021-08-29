import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserKeyword } from 'src/app/model/user-keyword';
import { ProfileDataService } from 'src/app/service/profile-data.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  public readonly keywords: UserKeyword[];
  public readonly profileType: string;
  public readonly user: User;

  public constructor(route: ActivatedRoute) {
    this.keywords = route.snapshot.data.keywords;
    this.profileType = route.snapshot.data.profileType;
    this.user = route.snapshot.data.user;
  }

  public getTopLabels(): ['name', 'career'] {
    return ['name', 'career'];
  }

  public getBottomLabels(): [
    'nationality',
    'religion',
    'residence',
    'stature'
  ] {
    return ['nationality', 'religion', 'residence', 'stature'];
  }

  public getData(
    label:
      | 'age-range'
      | 'name'
      | 'career'
      | 'hobby'
      | 'nationality'
      | 'religion'
      | 'residence'
      | 'stature'
      | 'stature-range'
      | 'weight'
      | 'weight-range'
  ) {
    return ProfileDataService.getData(this.keywords, this.user)[label];
  }
}
