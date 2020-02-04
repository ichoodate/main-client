import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type ItemAttributes = {
  id: string,
  type: string,
  original_price: string,
  final_price: string,
  currency: string,
  created_at: string,
  deleted_at: string
}

export type ItemRelations = {

}

@Injectable()
export class Item extends Model<ItemAttributes, ItemRelations> {

  protected readonly urlPath = 'items';

}
