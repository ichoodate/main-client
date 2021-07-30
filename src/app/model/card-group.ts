import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

export type CardGroupAttributes = {
  id: string,
  user_id: string,
  type: string,
  created_at: string
}

export type CardGroupRelations = {
  user: User
}

export class CardGroup extends Model<CardGroupAttributes, CardGroupRelations> {

  protected readonly urlPath = 'card-groups';

}
