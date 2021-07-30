import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

export type InvoiceAttributes = {
  id: string,
  user_id: string,
  created_at: string
}

export type InvoiceRelations = {
  user: User
}

export class Invoice extends Model<InvoiceAttributes, InvoiceRelations> {

  protected readonly urlPath = 'invoices';

}
