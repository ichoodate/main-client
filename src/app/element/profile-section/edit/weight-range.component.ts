import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data, ProfileSectionEditComponent } from 'src/app/element/profile-section/edit.component';
import { WeightRange } from 'src/app/model/keyword/weight-range';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-edit-weight-range',
  templateUrl: './weight-range.component.html'
})
export class ProfileSectionEditWeightRangeComponent extends ProfileSectionEditComponent {

  protected readonly weightRangeCtrl = new FormControl(undefined, [
    Validators.requiredTrue
  ]);
  protected readonly minCtrl = new FormControl;
  public weightRangeList: WeightRange[];
  public minList: string[];

  public ngOnInit() {

    this.form.addControl('weightRange', this.weightRangeCtrl);
    this.form.addControl('min', this.minCtrl);
    this.weightRangeCtrl.setValue(this.shared.weightRange);
    this.weightRangeList = this.shared.weightRangeList;
    this.minList      = this.shared.minList;

    if ( this.weightRangeCtrl.value ) {
      this.minCtrl.setValue(this.weightRangeCtrl.value.getAttrs().min);
    }
  }

  public minChange() {

    const weightRange = this.weightRangeCtrl.value;
    const min         = this.minCtrl.value;

    if ( weightRange && weightRange.getAttrs().min == min ) {
      return;
    }

    HttpService.api().get<WeightRange[]>('keyword/max-weight-ranges', {
      params: {
        min: min
      }
    }).subscribe((weightRangeList: WeightRange[]) => {
      this.weightRangeCtrl.setValue(null);
      this.weightRangeList = weightRangeList;
    });
  }

  public static setUp$(data: Data) {

    const minList$ = HttpService.api().get<WeightRange[]>('keyword/min-weight-ranges', {
      params: {
        max: '150'
      }
    }).pipe(
      map((weightRanges: WeightRange[]) => {

        return data.minList = weightRanges.map((weightRange: WeightRange) => {
          return weightRange.getAttrs().min;
        });
      })
    );

    if ( data.weightRange ) {

      return forkJoin(minList$, HttpService.api().get<WeightRange[]>('keyword/max-weight-ranges', {
        params: {
          min: data.weightRange.getAttrs().min
        }
      }).pipe(
        map((weightRangeList: WeightRange[]) => {
          data.weightRangeList = weightRangeList;
        })
      ));

    } else {

      return minList$;
    }
  }

  public submit$() {

    return HttpService.api().post<WeightRange>(this.profileType+'-keyword/weight-ranges', {
      keyword_id: this.weightRangeCtrl.value.getAttrs().id
    }).pipe(
      map((career: WeightRange) => {
        this.shared.weightRange = this.weightRangeCtrl.value;
        this.weightRangeList    = this.shared.weightRangeList;
        this.minList            = this.shared.minList;
      })
    );
  }

}
