import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

export type MatchAttributes = {
  id: string,
  man_id: string,
  woman_id: string
}

export type MatchRelations = {
  man: User,
  woman: User
}

@Injectable()
export class Match extends Model<MatchAttributes, MatchRelations> {

  protected readonly urlPath = 'matches';

}
