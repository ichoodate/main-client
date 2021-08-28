import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import {
  Data,
  ProfileSectionEditComponent,
} from 'src/app/element/profile-section/edit.component';
import { Weight } from 'src/app/model/keyword/weight';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-edit-weight',
  templateUrl: './weight.component.html',
})
export class ProfileSectionEditWeightComponent
  extends ProfileSectionEditComponent
  implements OnInit
{
  protected weightCtrl: FormControl = new FormControl(undefined, [
    Validators.requiredTrue,
  ]);

  public ngOnInit() {
    '...';
  }

  public static setUp$(data: Data) {}

  public submit$() {
    return HttpService.api()
      .post<Weight>(this.profileType + '-keyword/weight', {
        keyword_id: this.weightCtrl.value.getAttrs().id,
      })
      .pipe(
        map(() => {
          this.shared.weight = this.weightCtrl.value;
        })
      );
  }
}
