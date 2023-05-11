import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import {
  Data,
  ProfileSectionEditComponent,
} from 'src/app/element/profile-section/edit.component';
import { Hobby } from 'src/app/model/keyword/hobby';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-edit-hobby',
  templateUrl: './hobby.component.html',
})
export class ProfileSectionEditHobbyComponent
  extends ProfileSectionEditComponent
  implements OnInit
{
  public readonly hobbiesCtrl = new FormArray<FormControl<boolean | null>>([]);
  protected hobbies: Hobby[] = [];
  public hobbyList: Hobby[] = [];

  public ngOnInit() {
    this.form.addControl('hobbies', this.hobbiesCtrl);
    this.hobbies = this.shared.hobbies;
    this.hobbyList = this.shared.hobbyList;
    this.hobbyList.forEach((hobby: Hobby) => {
      const id = hobby.getAttrs().id;
      const has =
        this.hobbies.map((hobby: Hobby) => hobby.getAttrs().id).indexOf(id) !==
        -1;
      this.hobbiesCtrl.push(new FormControl(has));
    });
  }

  public static override setUp$(data: Data) {
    return HttpService.api()
      .get<Hobby[]>('keyword/hobbies', {})
      .pipe(
        map((hobbyList: Hobby[]) => {
          data.hobbyList = hobbyList;
        })
      );
  }

  public submit$() {
    const hobbies = _.chain<boolean>(this.form.get('hobbies')?.value)
      .pickBy()
      .keys()
      .map<Hobby>(((i: string) => {
        return this.hobbyList[parseInt(i)];
      }) as _.ListIterator<string, Hobby>)
      .value();

    return HttpService.api()
      .post<Hobby[]>(this.profileType + '-keyword/hobbies', {
        keyword_ids: hobbies
          .map((hobby: Hobby) => hobby.getAttrs().id)
          .join(','),
      })
      .pipe(
        map(() => {
          this.shared.hobbies = hobbies;
        })
      );
  }
}
