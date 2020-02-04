import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Observable } from 'rxjs';
import { StatureRange } from 'src/app/model/keyword/stature-range';
import { Data, ProfileSectionShowComponent } from 'src/app/element/profile-section/show.component';

@Component({
  selector: 'profile-section-show-stature-range',
  templateUrl: './stature-range.component.html'
})
export class ProfileSectionShowStatureRangeComponent extends ProfileSectionShowComponent {

  public statureRange: StatureRange;

  public ngOnInit() {

    this.statureRange = this.shared.statureRange;
  }

  public static setUp$(data: Data) {

  }

}
