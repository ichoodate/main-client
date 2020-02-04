import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { Item } from 'src/app/model/item';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

export type PaymentAttributes = {
  id: string,
  user_id: string,
  item_id: string,
  amount: string,
  created_at: string
}

export type PaymentRelations = {
  user: User,
  item: Item
}

@Injectable()
export class Payment extends Model<PaymentAttributes, PaymentRelations> {

  protected readonly urlPath = 'payments';

}
