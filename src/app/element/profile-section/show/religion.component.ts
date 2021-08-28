import { Component, OnInit } from '@angular/core';
import {
  Data,
  ProfileSectionShowComponent,
} from 'src/app/element/profile-section/show.component';
import { Religion } from 'src/app/model/keyword/religion';

@Component({
  selector: 'profile-section-show-religion',
  templateUrl: './religion.component.html',
})
export class ProfileSectionShowReligionComponent
  extends ProfileSectionShowComponent
  implements OnInit
{
  public religion: Religion;

  public ngOnInit() {
    this.religion = this.shared.religion;
  }

  public static setUp$(data: Data) {}
}
