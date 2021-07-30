import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

export type PopularityAttributes = {
  id: string,
  sender_id: string,
  receiver_id: string,
  point: string,
  created_at: string
}

export type PopularityRelations = {
  sender: User,
  receiver: User
}

export class Popularity extends Model<PopularityAttributes, PopularityRelations> {

  protected readonly urlPath = 'popularities';

}
