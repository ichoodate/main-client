import { Component, OnInit } from '@angular/core';
import {
  Data,
  ProfileSectionShowComponent,
} from 'src/app/element/profile-section/show.component';
import { AgeRange } from 'src/app/model/keyword/age-range';

@Component({
  selector: 'profile-section-show-age-range',
  templateUrl: './age-range.component.html',
})
export class ProfileSectionShowAgeRangeComponent
  extends ProfileSectionShowComponent
  implements OnInit
{
  public ageRange: AgeRange | undefined;

  public ngOnInit() {
    this.ageRange = this.shared.ageRange;
  }

  public static setUp$(data: Data) {}
}
