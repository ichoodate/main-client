import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Data,
  ProfileSectionEditComponent,
} from 'src/app/element/profile-section/edit.component';
import { AgeRange } from 'src/app/model/keyword/age-range';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-edit-age-range',
  templateUrl: './age-range.component.html',
})
export class ProfileSectionEditAgeRangeComponent
  extends ProfileSectionEditComponent
  implements OnInit
{
  protected readonly ageRangeCtrl = new FormControl<AgeRange | undefined>(
    undefined,
    [Validators.required]
  );
  protected readonly minCtrl = new FormControl();
  public ageRangeList: AgeRange[] = [];
  public minList: string[] = [];

  public ngOnInit() {
    this.form.addControl('ageRange', this.ageRangeCtrl);
    this.form.addControl('min', this.minCtrl);
    this.ageRangeCtrl.setValue(this.shared.ageRange);
    this.ageRangeList = this.shared.ageRangeList;
    this.minList = this.shared.minList;

    if (this.ageRangeCtrl.value) {
      this.minCtrl.setValue(this.ageRangeCtrl.value.getAttrs().min);
    }
  }

  public minChange() {
    const ageRange = this.ageRangeCtrl.value;
    const min = this.minCtrl.value;

    if (ageRange && ageRange.getAttrs().min == min) {
      return;
    }

    HttpService.api()
      .get<AgeRange[]>('keyword/max-age-ranges', {
        params: {
          min: min,
        },
      })
      .subscribe((ageRanges: AgeRange[]) => {
        this.ageRangeList = ageRanges;
      });
  }

  public static override setUp$(data: Data) {
    const minList$ = HttpService.api()
      .get<AgeRange[]>('keyword/min-age-ranges', {
        params: {
          max: '50',
        },
      })
      .pipe(
        map((ageRanges: AgeRange[]) => {
          return (data.minList = ageRanges.map((ageRange: AgeRange) => {
            return ageRange.getAttrs().min;
          }));
        })
      );

    if (data.ageRange) {
      return forkJoin(
        minList$,
        HttpService.api()
          .get<AgeRange[]>('keyword/max-age-ranges', {
            params: {
              min: data.ageRange.getAttrs().min,
            },
          })
          .pipe(
            map((ageRangeList: AgeRange[]) => {
              data.ageRangeList = ageRangeList;
            })
          )
      );
    } else {
      return forkJoin(minList$);
    }
  }

  public submit$() {
    return HttpService.api()
      .post<AgeRange>(this.profileType + '-keyword/age-ranges', {
        keyword_id: this.ageRangeCtrl.value?.getAttrs().id,
      })
      .pipe(
        map((career: AgeRange) => {
          this.shared.ageRange = this.ageRangeCtrl.value;
          this.ageRangeList = this.shared.ageRangeList;
          this.minList = this.shared.minList;
        })
      );
  }
}
