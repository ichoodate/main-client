import { Component } from '@angular/core';
import { Data, ProfileSectionShowComponent } from 'src/app/element/profile-section/show.component';

@Component({
  selector: 'profile-section-show-name',
  templateUrl: './name.component.html'
})
export class ProfileSectionShowNameComponent extends ProfileSectionShowComponent {

  public name: string;

  public ngOnInit() {

    this.name = this.shared.name;
  }

  public static setUp$(data: Data) {

  }

}
