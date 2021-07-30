import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';
import { Payment } from 'src/app/model/payment';
import { HttpService } from 'src/app/service/http.service';

export type SubscriptionAttributes = {
  id: string,
  user_id: string,
  payment_id: string,
  type: string,
  created_at: string,
  deleted_at: string
}

export type SubscriptionRelations = {
  user: User,
  payment: Payment
}

export class Subscription extends Model<SubscriptionAttributes, SubscriptionRelations> {

  protected readonly urlPath = 'subscriptions';

}
