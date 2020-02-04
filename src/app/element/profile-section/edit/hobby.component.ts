import * as _ from 'lodash';
import { Component } from '@angular/core';
import { FormControl, FormArray, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data, ProfileSectionEditComponent } from 'src/app/element/profile-section/edit.component';
import { Hobby } from 'src/app/model/keyword/hobby';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-edit-hobby',
  templateUrl: './hobby.component.html'
})
export class ProfileSectionEditHobbyComponent extends ProfileSectionEditComponent {

  protected readonly hobbiesCtrl = new FormArray([]);
  protected hobbies: Hobby[];
  public hobbyList: Hobby[];

  public ngOnInit() {
    this.form.addControl('hobbies', this.hobbiesCtrl);
    this.hobbies = this.shared.hobbies
    this.hobbyList = this.shared.hobbyList
    this.hobbyList.forEach((hobby: Hobby) => {
      this.hobbiesCtrl.push(new FormControl);
    });
  }

  public has(hobby: Hobby): boolean {

    const id = hobby.getAttrs().id;

    return _.chain(this.hobbies).map((hobby: Hobby) => hobby.getAttrs().id).indexOf(id).value() !== -1;
  }

  public static setUp$(data: Data) {

    return HttpService.api().get<Hobby[]>('keyword/hobbies', {}).pipe(
      map((hobbyList: Hobby[]) => {
        data.hobbyList = hobbyList;
      })
    );
  }

  public submit$() {
    console.log(this.form.get('hobbies').value);
    const hobbies = _.chain(this.form.get('hobbies').value).pickBy().keys().map((i: number) => this.hobbyList[i]).value();

    return HttpService.api().post<Hobby[]>(this.profileType+'-keyword/hobbies', {
      keyword_ids: hobbies.map((hobby: Hobby) => hobby.getAttrs().id).join(',')
    }).pipe(
      map(() => {
        this.shared.hobbies = hobbies;
      })
    );
  }

}

