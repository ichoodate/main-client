import * as _ from 'lodash';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Data, ProfileSectionShowComponent } from 'src/app/element/profile-section/show.component';
import { Career } from 'src/app/model/keyword/career';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-show-career',
  templateUrl: './career.component.html'
})
export class ProfileSectionShowCareerComponent extends ProfileSectionShowComponent {

  public careers: Career[];

  public ngOnInit() {

    this.careers = this.shared.careers;
  }

  public static getCareers$(...careers: Career[]): Observable<Career[]> {

    if ( careers.length == 0 || careers[0].getAttrs().parent_id == null ) {
      return of(careers);
    }

    return HttpService.api().get<Career>('keyword/careers/'+careers[0].getAttrs().parent_id, {}).pipe(
      switchMap((career: Career) => {
        return this.getCareers$(career, ...careers);
      })
    );
  }

  public static setUp$(data: Data) {

    const careers = data.career ? [data.career] : [];

    return this.getCareers$(...careers).pipe(
      map((careers: Career[]) => {
        data.careers = careers;
        return data;
      })
    );
  }

}
