import { Injectable, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';

export type Data = {
  [name: string]: any;
};

@Injectable()
export abstract class ProfileSectionEditComponent implements OnInit {
  public readonly form = new FormGroup({});
  public abstract ngOnInit(): void;
  public abstract submit$(): Observable<any>;
  public shared: Data = {};
  public profileType: string = '';

  public static setUp$(data: Data): Observable<any> | void {
    throw "does not implement inherited abstract member 'setUp$()' from class 'ProfileSectionEditComponent'.";
  }

  public compareWith(optionVal: Model<any, any>, ctrlVal: Model<any, any>) {
    return (
      optionVal && ctrlVal && optionVal.getAttrs().id == ctrlVal.getAttrs().id
    );
  }

  public getFormCtrl(
    key: string,
    index: number | undefined = undefined
  ): FormControl {
    if (index !== undefined) {
      return (this.form.get(key) as FormArray).at(index) as FormControl;
    }

    return this.form.get(key) as FormControl;
  }
}
