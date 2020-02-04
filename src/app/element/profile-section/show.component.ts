import { OnInit } from '@angular/core';
import { ProfileSectionContainerComponent } from 'src/app/element/profile-section/container.component';

export type Data = {
    [name: string]: any;
};

export abstract class ProfileSectionShowComponent implements OnInit {

  public abstract ngOnInit(): void;
  public shared: Data;

  public static setUp$(data: Data) {
    throw 'does not implement inherited abstract member \'setUp$()\' from class \'ProfileSectionEditComponent\'.';
  };

}
