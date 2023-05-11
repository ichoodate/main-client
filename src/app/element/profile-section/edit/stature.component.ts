import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import {
  Data,
  ProfileSectionEditComponent,
} from 'src/app/element/profile-section/edit.component';
import { Stature } from 'src/app/model/keyword/stature';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-edit-stature',
  templateUrl: './stature.component.html',
})
export class ProfileSectionEditStatureComponent
  extends ProfileSectionEditComponent
  implements OnInit
{
  protected statureCtrl: FormControl = new FormControl(undefined, [
    Validators.required,
  ]);
  public statureList: Stature[] = [];

  public ngOnInit() {
    this.form.addControl('stature', this.statureCtrl);
    this.statureCtrl.setValue(this.shared.stature);
    this.statureList = this.shared.statureList;
  }

  public static override setUp$(data: Data) {
    return HttpService.api()
      .get<Stature[]>('keyword/statures', {})
      .pipe(
        map((statureList: Stature[]) => {
          data.statureList = statureList;
        })
      );
  }

  public submit$() {
    return HttpService.api()
      .post<Stature>(this.profileType + '-keyword/statures', {
        keyword_id: this.statureCtrl.value.getAttrs().id,
      })
      .pipe(
        map(() => {
          this.shared.stature = this.statureCtrl.value;
        })
      );
  }
}
