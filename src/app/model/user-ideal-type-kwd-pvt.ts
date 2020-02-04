import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { Obj } from 'src/app/model/obj';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

export type UserIdealTypeKwdPvtAttributes = {
  id: string,
  user_id: string,
  keyword_id: string
}

export type UserIdealTypeKwdPvtRelations = {
  user: User,
  keyword: Obj
}

@Injectable()
export class UserIdealTypeKwdPvt extends Model<UserIdealTypeKwdPvtAttributes, UserIdealTypeKwdPvtRelations> {

  protected readonly urlPath = 'ideal-type-keywords';

}
