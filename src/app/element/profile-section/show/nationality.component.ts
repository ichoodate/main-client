import { Component, OnInit } from '@angular/core';
import {
  Data,
  ProfileSectionShowComponent,
} from 'src/app/element/profile-section/show.component';
import { Country } from 'src/app/model/keyword/country';
import { Nationality } from 'src/app/model/keyword/nationality';

@Component({
  selector: 'profile-section-show-nationality',
  templateUrl: './nationality.component.html',
})
export class ProfileSectionShowNationalityComponent
  extends ProfileSectionShowComponent
  implements OnInit
{
  public nationality: Nationality | undefined;
  public country: Country | undefined;

  public ngOnInit() {
    this.nationality = this.shared.nationality;
    this.country =
      this.nationality && <Country>this.nationality.getRelations().country;
  }

  public static override setUp$(data: Data) {
    if (data.nationality) {
      return data.nationality.load$({
        expands: 'country',
      });
    }
  }
}
