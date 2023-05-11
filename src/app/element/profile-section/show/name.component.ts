import { Component, OnInit } from '@angular/core';
import {
  Data,
  ProfileSectionShowComponent,
} from 'src/app/element/profile-section/show.component';

@Component({
  selector: 'profile-section-show-name',
  templateUrl: './name.component.html',
})
export class ProfileSectionShowNameComponent
  extends ProfileSectionShowComponent
  implements OnInit
{
  public name: string | undefined;

  public ngOnInit() {
    this.name = this.shared.name;
  }

  public static override setUp$(data: Data) {}
}
