import { Component, OnInit } from '@angular/core';
import {
  Data,
  ProfileSectionShowComponent,
} from 'src/app/element/profile-section/show.component';
import { Stature } from 'src/app/model/keyword/stature';

@Component({
  selector: 'profile-section-show-stature',
  templateUrl: './stature.component.html',
})
export class ProfileSectionShowStatureComponent
  extends ProfileSectionShowComponent
  implements OnInit
{
  public stature: Stature;

  public ngOnInit() {
    this.stature = this.shared.stature;
  }

  public static setUp$(data: Data) {}
}
