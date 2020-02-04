import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Data, ProfileSectionEditComponent } from 'src/app/element/profile-section/edit.component';
import { Country } from 'src/app/model/keyword/country';
import { State } from 'src/app/model/keyword/state';
import { Residence } from 'src/app/model/keyword/residence';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-edit-residence',
  templateUrl: './residence.component.html'
})
export class ProfileSectionEditResidenceComponent extends ProfileSectionEditComponent {

  protected residenceCountryCtrl: FormControl = new FormControl(undefined, [
    Validators.requiredTrue
  ]);
  protected residenceStateCtrl: FormControl = new FormControl;
  public countryList: Country[];
  public stateList: State[];

  public ngOnInit() {

    this.form.addControl('residenceCountry', this.residenceCountryCtrl);
    this.residenceCountryCtrl.setValue(this.shared.residenceCountry);
    this.form.addControl('residenceState', this.residenceStateCtrl);
    this.residenceStateCtrl.setValue(this.shared.residenceState);
    this.countryList = this.shared.countryList;
    this.stateList   = this.shared.stateList;
  }

  public countryChange() {

    const residenceCountry = this.residenceCountryCtrl.value;
    const self             = ProfileSectionEditResidenceComponent;

    HttpService.api().get<State[]>('keyword/states', {
      params: {
        country_id: residenceCountry.getAttrs().related_id,
        expands: 'residence'
      }
    }).subscribe((stateList: State[]) => {
      this.residenceStateCtrl.setValue(null);
      this.stateList = stateList;
    });
  }

  public static setUp$(data: Data) {

    const countryList$ = HttpService.api().get<Country[]>('keyword/countries', {
      params: {
        expands: 'residence'
      }
    }).pipe(
      map((countryList: Country[]) => {
        data.countryList = countryList;
      })
    );

    if ( data.residenceCountry ) {
      return forkJoin(countryList$, HttpService.api().get<State[]>('keyword/states', {
        params: {
          country_id: data.residenceCountry.getAttrs().related_id,
          expands: 'residence'
        }
      }).pipe(
        map((stateList: State[]) => {
          data.stateList = stateList;
        })
      ));
    } else {
      return countryList$;
    }
  }

  public submit$() {

    if ( this.residenceStateCtrl.value ) {
      return HttpService.api().post<Residence>(this.profileType+'-keyword/residences', {
        keyword_id: this.residenceStateCtrl.value.getAttrs().id
      }).pipe(
        switchMap(() => {
          this.shared.residence        = this.residenceStateCtrl.value;
          this.shared.residenceState   = this.residenceStateCtrl.value;
          this.shared.stateList        = this.stateList;
          this.shared.residenceCountry = this.residenceCountryCtrl.value;
          this.shared.countryList      = this.countryList;

          return forkJoin(
            this.shared.residenceCountry.load$({
              expands: 'related.concrete'
            }),
            this.shared.residenceState.load$({
              expands: 'related.concrete'
            })
          );
        }),
      );
    } else {
      return HttpService.api().post<Residence>(this.profileType+'-keyword/residences', {
        keyword_id: this.residenceCountryCtrl.value.getAttrs().id
      }).pipe(
        switchMap(() => {
          this.shared.residence        = this.residenceCountryCtrl.value;
          this.shared.residenceCountry = this.residenceCountryCtrl.value;
          this.shared.countryList      = this.countryList;

          return this.shared.residenceCountry.load$({
            expands: 'related.concrete'
          });
        })
      );
    }
  }

}
