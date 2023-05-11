import { Component, OnInit } from '@angular/core';
import {
  Data,
  ProfileSectionShowComponent,
} from 'src/app/element/profile-section/show.component';
import { StatureRange } from 'src/app/model/keyword/stature-range';

@Component({
  selector: 'profile-section-show-stature-range',
  templateUrl: './stature-range.component.html',
})
export class ProfileSectionShowStatureRangeComponent
  extends ProfileSectionShowComponent
  implements OnInit
{
  public statureRange: StatureRange | undefined;

  public ngOnInit() {
    this.statureRange = this.shared.statureRange;
  }

  public static override setUp$(data: Data) {}
}
