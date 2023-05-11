import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import {
  Data,
  ProfileSectionEditComponent,
} from 'src/app/element/profile-section/edit.component';
import { Religion } from 'src/app/model/keyword/religion';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-edit-religion',
  templateUrl: './religion.component.html',
})
export class ProfileSectionEditReligionComponent
  extends ProfileSectionEditComponent
  implements OnInit
{
  protected religionCtrl: FormControl = new FormControl(undefined, [
    Validators.required,
  ]);
  public religionList: Religion[] = [];

  public ngOnInit() {
    this.form.addControl('religion', this.religionCtrl);
    this.religionCtrl.setValue(this.shared.religion);
    this.religionList = this.shared.religionList;
  }

  public static override setUp$(data: Data) {
    return HttpService.api()
      .get<Religion[]>('keyword/religions', {})
      .pipe(
        map((religionList: Religion[]) => {
          data.religionList = religionList;
        })
      );
  }

  public submit$() {
    return HttpService.api()
      .post<Religion>(this.profileType + '-keyword/religions', {
        keyword_id: this.religionCtrl.value.getAttrs().id,
      })
      .pipe(
        map(() => {
          this.shared.religion = this.religionCtrl.value;
        })
      );
  }
}
