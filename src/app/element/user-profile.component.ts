import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserSelfKwdPvt } from 'src/app/model/user-self-kwd-pvt';
import { User } from 'src/app/model/user';
import { ProfileDataService } from 'src/app/service/profile-data.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  public readonly data: {};
  public readonly keywords: UserSelfKwdPvt[];
  public readonly profileType: string;
  public readonly user: User;

  public constructor(route: ActivatedRoute) {

    this.keywords    = route.snapshot.data.keywords;
    this.profileType = route.snapshot.data.profileType;
    this.user        = route.snapshot.data.user;
    this.data        = ProfileDataService.getData(this.keywords, this.user);
  }

  public getTopLabels() {

    return [
      'name',
      'career'
    ];
  }

  public getBottomLabels() {

    return [
      'nationality',
      'religion',
      'residence',
      'stature'
    ];
  }

}
