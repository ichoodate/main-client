import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { Obj } from 'src/app/model/obj';
import { HttpService } from 'src/app/service/http.service';

export type MatchingKwdPvtAttributes = {
  id: string,
  ideal_kwd_id: string,
  self_kwd_id: string
}

export type MatchingKwdPvtRelations = {
  ideale_kwd: Obj
  self_kwd: Obj
}

@Injectable()
export class MatchingKwdPvt extends Model<MatchingKwdPvtAttributes, MatchingKwdPvtRelations> {

}
