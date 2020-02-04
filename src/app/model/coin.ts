import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';
import { Balance } from 'src/app/model/balance';
import { Obj } from 'src/app/model/obj';
import { HttpService } from 'src/app/service/http.service';

export type CoinAttributes = {
  id: string,
  user_id: string,
  balance_id: string,
  related_id: string,
  count: string,
  created_at: string
}

export type CoinRelations = {
  user: User,
  balance: Balance,
  related: Obj
}

@Injectable()
export class Coin extends Model<CoinAttributes, CoinRelations> {

  protected readonly urlPath = 'coins';

}
