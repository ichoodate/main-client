import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Observable } from 'rxjs';
import { AgeRange } from 'src/app/model/keyword/age-range';
import { Data, ProfileSectionShowComponent } from 'src/app/element/profile-section/show.component';

@Component({
  selector: 'profile-section-show-age-range',
  templateUrl: './age-range.component.html'
})
export class ProfileSectionShowAgeRangeComponent extends ProfileSectionShowComponent {

  public ageRange: AgeRange;

  public ngOnInit() {

    this.ageRange = this.shared.ageRange;
  }

  public static setUp$(data: Data) {

  }

}
