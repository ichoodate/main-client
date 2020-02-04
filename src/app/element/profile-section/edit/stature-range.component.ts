import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data, ProfileSectionEditComponent } from 'src/app/element/profile-section/edit.component';
import { StatureRange } from 'src/app/model/keyword/stature-range';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-edit-stature-range',
  templateUrl: './stature-range.component.html'
})
export class ProfileSectionEditStatureRangeComponent extends ProfileSectionEditComponent {

  protected readonly statureRangeCtrl = new FormControl(undefined, [
    Validators.requiredTrue
  ]);
  protected readonly minCtrl = new FormControl;
  public statureRangeList: StatureRange[];
  public minList: string[];

  public ngOnInit() {

    this.form.addControl('statureRange', this.statureRangeCtrl);
    this.form.addControl('min', this.minCtrl);
    this.statureRangeCtrl.setValue(this.shared.statureRange);
    this.statureRangeList = this.shared.statureRangeList;
    this.minList      = this.shared.minList;

    if ( this.statureRangeCtrl.value ) {
      this.minCtrl.setValue(this.statureRangeCtrl.value.getAttrs().min);
    }
  }

  public minChange() {

    const statureRange = this.statureRangeCtrl.value;
    const min      = this.minCtrl.value;

    if ( statureRange && statureRange.getAttrs().min == min ) {
      return;
    }

    HttpService.api().get<StatureRange[]>('keyword/max-stature-ranges', {
      params: {
        min: min
      }
    }).subscribe((statureRanges: StatureRange[]) => {
      this.statureRangeCtrl.setValue(null);
      this.statureRangeList = statureRanges;
    });
  }

  public static setUp$(data: Data) {

    const minList$ = HttpService.api().get<StatureRange[]>('keyword/min-stature-ranges', {
      params: {
        max: '200'
      }
    }).pipe(
      map((statureRanges: StatureRange[]) => {

        return data.minList = statureRanges.map((statureRange: StatureRange) => {
          return statureRange.getAttrs().min;
        });
      })
    );

    if ( data.statureRange ) {

      return forkJoin(minList$, HttpService.api().get<StatureRange[]>('keyword/max-stature-ranges', {
        params: {
          min: data.statureRange.getAttrs().min
        }
      }).pipe(
        map((statureRangeList: StatureRange[]) => {
          data.statureRangeList = statureRangeList;
        })
      ));

    } else {

      return minList$;
    }
  }

  public submit$() {

    return HttpService.api().post<StatureRange>(this.profileType+'-keyword/stature-ranges', {
      keyword_id: this.statureRangeCtrl.value.getAttrs().id
    }).pipe(
      map((career: StatureRange) => {
        this.shared.statureRange = this.statureRangeCtrl.value;
        this.statureRangeList    = this.shared.statureRangeList;
        this.minList             = this.shared.minList;
      })
    );
  }

}
