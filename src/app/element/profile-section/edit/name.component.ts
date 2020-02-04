import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Data, ProfileSectionEditComponent } from 'src/app/element/profile-section/edit.component';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'profile-section-edit-name',
  templateUrl: './name.component.html'
})
export class ProfileSectionEditNameComponent extends ProfileSectionEditComponent {

  protected nameCtrl: FormControl = new FormControl('', [
    Validators.requiredTrue
  ]);

  public ngOnInit() {

    this.form.addControl('name', this.nameCtrl);
    this.nameCtrl.setValue(this.shared.name);
  }

  public static setUp$(data: Data) {

  }

  public submit$() {

    return HttpService.api().post<User>('/auth/user', {
      name: this.nameCtrl.value
    }).pipe(
      map((auth: User) => {
        this.shared.name = this.nameCtrl.value;
      })
    );
  }

}
