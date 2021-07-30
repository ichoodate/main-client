import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

export type BalanceAttributes = {
  id: string,
  user_id: string,
  count: string,
  created_at: string,
  deleted_at: string
}

export type BalanceRelations = {
  user: User
}

export class Balance extends Model<BalanceAttributes, BalanceRelations> {

  protected readonly urlPath = 'balances';

}
