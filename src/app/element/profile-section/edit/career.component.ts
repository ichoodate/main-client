import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Data,
  ProfileSectionEditComponent,
} from 'src/app/element/profile-section/edit.component';
import { Career } from 'src/app/model/keyword/career';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-edit-career',
  templateUrl: './career.component.html',
})
export class ProfileSectionEditCareerComponent
  extends ProfileSectionEditComponent
  implements OnInit
{
  protected readonly careersCtrl = new FormArray([]);
  public careerLists: Career[][] = [];

  public ngOnInit() {
    this.careerLists = this.shared.careerLists;
    this.form.addControl('careers', this.careersCtrl);

    if (this.shared.careers < (this.careerLists as Career[][])) {
      this.shared.careers.push(null);
    }

    this.shared.careers.forEach((career: Career) => {
      (<FormArray>this.form.get('careers')).push(new FormControl(career));
    });

    this.careersCtrl.at(0).setValidators([Validators.requiredTrue]);
  }

  public change(i: number) {
    let career = this.careersCtrl.at(i).value;

    HttpService.api()
      .get<Career[]>('keyword/careers', {
        params: {
          parent_id: career.getAttrs().id,
        },
      })
      .subscribe((careerList: Career[]) => {
        if (careerList.length == 0) {
          return;
        }

        this.careerLists = this.careerLists.slice(0, i + 2);
        this.careerLists[i + 1] = careerList;

        while (this.careersCtrl.length < i + 2) {
          this.careersCtrl.insert(i + 1, new FormControl());
        }

        while (this.careersCtrl.length > i + 2) {
          this.careersCtrl.removeAt(this.careersCtrl.length - 1);
        }

        this.careersCtrl.at(i + 1).setValue(null);
      });
  }

  public static setUp$(data: Data) {
    const parentIds = data.careers.map(
      (career: Career) => career.getAttrs().id
    );
    parentIds.unshift('null');

    const observers = parentIds.map((parentId: string) => {
      return HttpService.api().get<Career[]>('keyword/careers', {
        params: {
          parent_id: parentId,
        },
      });
    });

    return forkJoin<Career[]>(observers).pipe(
      map((careerLists: Career[][]) => {
        if ((<Career[]>_.last(careerLists)).length == 0) {
          careerLists.pop();
        }
        data.careerLists = careerLists;

        return data;
      })
    );
  }

  public submit$() {
    const careers = _.clone(this.careersCtrl.value);
    let last = careers.pop();

    while (!last) {
      last = careers.pop();
    }

    return HttpService.api()
      .post<Career>(this.profileType + '-keyword/careers', {
        keyword_id: last.getAttrs().id,
      })
      .pipe(
        map((career: Career) => {
          this.shared.career = career;
          this.shared.careerLists = this.careerLists;
          this.shared.careers = this.careersCtrl.value;
        })
      );
  }
}
