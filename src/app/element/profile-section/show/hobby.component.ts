import { Component, OnInit } from '@angular/core';
import {
  Data,
  ProfileSectionShowComponent,
} from 'src/app/element/profile-section/show.component';
import { Hobby } from 'src/app/model/keyword/hobby';

@Component({
  selector: 'profile-section-show-hobby',
  templateUrl: './hobby.component.html',
})
export class ProfileSectionShowHobbyComponent
  extends ProfileSectionShowComponent
  implements OnInit
{
  public hobbies: Hobby[] | undefined;

  public ngOnInit() {
    this.hobbies = this.shared.hobbies;
  }

  public static override setUp$(data: Data) {}
}
