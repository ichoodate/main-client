import { Injectable, OnInit } from '@angular/core';

export type Data = {
  [name: string]: any;
};

@Injectable()
export abstract class ProfileSectionShowComponent implements OnInit {
  public abstract ngOnInit(): void;
  public shared: Data = {};

  public static setUp$(data: Data) {
    throw "does not implement inherited abstract member 'setUp$()' from class 'ProfileSectionEditComponent'.";
  }
}
