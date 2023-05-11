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
    Validators.required,
  ]);
  public weightList: Weight[] = [];

  public ngOnInit() {
    this.form.addControl('weight', this.weightCtrl);
    this.weightCtrl.setValue(this.shared.weight);
    this.weightList = this.shared.weightList;
  }

  public static override setUp$(data: Data) {
    return HttpService.api()
      .get<Weight[]>('keyword/weights', {})
      .pipe(
        map((weightList: Weight[]) => {
          data.weightList = weightList;
        })
      );
  }

  public submit$() {
    return HttpService.api()
      .post<Weight>(this.profileType + '-keyword/weights', {
        keyword_id: this.weightCtrl.value.getAttrs().id,
      })
      .pipe(
        map(() => {
          this.shared.weight = this.weightCtrl.value;
        })
      );
  }
}
