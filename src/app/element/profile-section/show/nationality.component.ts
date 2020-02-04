import { Component } from '@angular/core';
import { Data, ProfileSectionShowComponent } from 'src/app/element/profile-section/show.component';
import { Country } from 'src/app/model/keyword/country';
import { Nationality } from 'src/app/model/keyword/nationality';

@Component({
  selector: 'profile-section-show-nationality',
  templateUrl: './nationality.component.html'
})
export class ProfileSectionShowNationalityComponent extends ProfileSectionShowComponent {

  public nationality: Nationality;
  public country: Country;

  public ngOnInit() {

    this.nationality = this.shared.nationality;
    this.country     = this.nationality && <Country>this.nationality.getRelation('country');
  }

  public static setUp$(data: Data) {

    if ( data.nationality ) {
      return data.nationality.load$({
        expands: 'country'
      });
    }
  }

}
