import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Observable } from 'rxjs';
import { WeightRange } from 'src/app/model/keyword/weight-range';
import { Data, ProfileSectionShowComponent } from 'src/app/element/profile-section/show.component';

@Component({
  selector: 'profile-section-show-weight-range',
  templateUrl: './weight-range.component.html'
})
export class ProfileSectionShowWeightRangeComponent extends ProfileSectionShowComponent {

  public weightRange: WeightRange;

  public ngOnInit() {

    this.weightRange = this.shared.weightRange;
  }

  public static setUp$(data: Data) {

  }

}
