import { Component, OnInit } from '@angular/core';
import {
  Data,
  ProfileSectionShowComponent,
} from 'src/app/element/profile-section/show.component';
import { WeightRange } from 'src/app/model/keyword/weight-range';

@Component({
  selector: 'profile-section-show-weight-range',
  templateUrl: './weight-range.component.html',
})
export class ProfileSectionShowWeightRangeComponent
  extends ProfileSectionShowComponent
  implements OnInit
{
  public weightRange: WeightRange | undefined;

  public ngOnInit() {
    this.weightRange = this.shared.weightRange;
  }

  public static override setUp$(data: Data) {}
}
