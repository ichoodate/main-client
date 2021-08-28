import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import {
  Data,
  ProfileSectionEditComponent,
} from 'src/app/element/profile-section/edit.component';
import { Country } from 'src/app/model/keyword/country';
import { Nationality } from 'src/app/model/keyword/nationality';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-edit-nationality',
  templateUrl: './nationality.component.html',
})
export class ProfileSectionEditNationalityComponent
  extends ProfileSectionEditComponent
  implements OnInit
{
  protected nationalityCtrl: FormControl = new FormControl(undefined, [
    Validators.requiredTrue,
  ]);
  public countryList: Country[];

  public ngOnInit() {
    this.form.addControl('nationality', this.nationalityCtrl);
    this.nationalityCtrl.setValue(this.shared.nationality);
    this.countryList = this.shared.countryList;
  }

  public static setUp$(data: Data) {
    return HttpService.api()
      .get<Country[]>('keyword/countries', {
        params: {
          expands: 'nationality',
        },
      })
      .pipe(
        map((countryList: Country[]) => {
          data.countryList = countryList;
        })
      );
  }

  public submit$() {
    return HttpService.api()
      .post<Nationality>(this.profileType + '-keyword/nationalities', {
        keyword_id: this.nationalityCtrl.value.getAttrs().id,
      })
      .pipe(
        switchMap(() => {
          this.shared.nationality = this.nationalityCtrl.value;
          return this.shared.nationality.load$({
            expands: 'country',
          });
        })
      );
  }
}
