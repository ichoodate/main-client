import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardFlip } from 'src/app/model/card-flip';
import { Friend } from 'src/app/model/friend';
import { User } from 'src/app/model/user';
import { UserKeyword } from 'src/app/model/user-keyword';
import { HttpService } from 'src/app/service/http.service';
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
  public readonly authUser: User;
  public readonly cardFlip: CardFlip;
  public friend: Friend | null;

  public constructor(route: ActivatedRoute) {
    this.keywords = route.snapshot.data.keywords;
    this.profileType = route.snapshot.data.profileType;
    this.user = route.snapshot.data.user;
    this.authUser = route.snapshot.data.authUser;
    this.cardFlip = route.snapshot.data.cardFlip;
    this.friend = route.snapshot.data.friend;
  }

  public addFriend(): void {
    HttpService.api()
      .post<Friend>('friends', {
        user_id: this.user.getAttrs().id,
      })
      .subscribe((friend: Friend) => {
        this.friend = friend;
      });
  }

  public removeFriend(): void {
    HttpService.api()
      .delete<Friend>('friends/' + (this.friend as Friend).getAttrs().id)
      .subscribe(() => {
        this.user.unsetRelation('friend');
        this.friend = null;
      });
  }

  public hasFriend(): boolean {
    return !!this.friend;
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
