import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import {
  Data,
  ProfileSectionEditComponent,
} from 'src/app/element/profile-section/edit.component';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-edit-name',
  templateUrl: './name.component.html',
})
export class ProfileSectionEditNameComponent
  extends ProfileSectionEditComponent
  implements OnInit
{
  protected nameCtrl: FormControl = new FormControl('', [Validators.required]);

  public ngOnInit() {
    this.form.addControl('name', this.nameCtrl);
    this.nameCtrl.setValue(this.shared.name);
  }

  public static override setUp$(data: Data) {}

  public submit$() {
    return HttpService.api()
      .patch<User>('auth/user', {
        name: this.nameCtrl.value,
      })
      .pipe(
        map(() => {
          this.shared.name = this.nameCtrl.value;
        })
      );
  }
}
