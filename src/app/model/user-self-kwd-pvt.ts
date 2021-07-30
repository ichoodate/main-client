import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { Obj } from 'src/app/model/obj';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

export type UserSelfKwdPvtAttributes = {
  id: string,
  user_id: string,
  keyword_id: string,
}

export type UserSelfKwdPvtRelations = {
  user: User,
  keyword: Obj
}

export class UserSelfKwdPvt extends Model<UserSelfKwdPvtAttributes, UserSelfKwdPvtRelations> {

  protected readonly urlPath = 'self-keywords';

}
