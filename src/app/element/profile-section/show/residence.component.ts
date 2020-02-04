import { Component } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Data, ProfileSectionShowComponent } from 'src/app/element/profile-section/show.component';
import { Residence } from 'src/app/model/keyword/residence';
import { Country } from 'src/app/model/keyword/country';
import { State } from 'src/app/model/keyword/state';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-show-residence',
  templateUrl: './residence.component.html'
})
export class ProfileSectionShowResidenceComponent extends ProfileSectionShowComponent {

  public residenceCountry: Residence;
  public residenceState: Residence;
  public country: Country;
  public state: State;

  public ngOnInit() {

    this.residenceCountry = this.shared.residenceCountry;
    this.residenceState   = this.shared.residenceState;
    this.country          = this.residenceCountry && <Country>this.residenceCountry.getRelation('related.concrete');
    this.state            = this.residenceState && <State>this.residenceState.getRelation('related.concrete');
  }

  public static getResidences$(...residences: Residence[]): Observable<Residence[]> {

    if ( residences.length == 0 || residences[0].getAttrs().parent_id == null ) {
      return of(residences);
    }

    return HttpService.api().get<Residence>('keyword/residences/'+residences[0].getAttrs().parent_id, {}).pipe(
      switchMap((residence: Residence) => {
        return this.getResidences$(residence, ...residences);
      })
    );
  }

  public static setUp$(data: Data) {

    const residences = data.residence ? [data.residence] : [];

    return this.getResidences$(...residences).pipe(
      switchMap((residences: Residence[]) => {

        data.residenceCountry = residences[0];
        data.residenceState = residences[1];

        if ( data.residenceState ) {

          return forkJoin(data.residenceCountry.load$({
            expands: 'related.concrete'
          }), data.residenceState.load$({
            expands: 'related.concrete'
          }));
        } else if ( data.residenceCountry ) {

          return data.residenceCountry.load$({
            expands: 'related.concrete'
          });
        }
      })
    );
  }

}
