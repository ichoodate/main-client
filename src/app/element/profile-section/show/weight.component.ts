import { Component } from '@angular/core';
import { Data, ProfileSectionShowComponent } from 'src/app/element/profile-section/show.component';
import { Weight } from 'src/app/model/keyword/weight';

@Component({
  selector: 'profile-section-show-weight',
  templateUrl: './weight.component.html'
})
export class ProfileSectionShowWeightComponent extends ProfileSectionShowComponent {

  public weight: Weight;

  public ngOnInit() {

    this.weight = this.shared.weight;
  }

  public static setUp$(data: Data) {

  }

}
