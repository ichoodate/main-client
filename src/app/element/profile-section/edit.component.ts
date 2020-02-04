import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Model } from 'src/app/model';
import { ProfileSectionContainerComponent } from 'src/app/element/profile-section/container.component';

export type Data = {
    [name: string]: any;
};

export abstract class ProfileSectionEditComponent implements OnInit {

  public readonly form = new FormGroup({});
  public abstract ngOnInit(): void;
  public abstract submit$(): Observable<any>;
  public shared: Data;
  public profileType: string;

  public static setUp$(data: Data): Observable<any> | void {
    throw 'does not implement inherited abstract member \'setUp$()\' from class \'ProfileSectionEditComponent\'.';
  };

  public compareWith(optionVal: Model<any,any>, ctrlVal: Model<any,any>) {

    return optionVal && ctrlVal && optionVal.getAttrs().id == ctrlVal.getAttrs().id;
  }

}
