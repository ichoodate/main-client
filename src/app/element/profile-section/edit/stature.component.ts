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
    Validators.requiredTrue,
  ]);

  public ngOnInit() {
    '...';
  }

  public static setUp$(data: Data) {}

  public submit$() {
    return HttpService.api()
      .post<Stature>(this.profileType + '-keyword/stature', {
        keyword_id: this.statureCtrl.value.getAttrs().id,
      })
      .pipe(
        map(() => {
          this.shared.stature = this.statureCtrl.value;
        })
      );
  }
}
