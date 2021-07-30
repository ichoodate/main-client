import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type CareerAttributes = {
  id: string,
  parent_id: string,
  code: string,
  type: string,
  category: string
}

export type CareerRelations = {

}

export class Career extends Model<CareerAttributes, CareerRelations> {

  protected readonly urlPath = 'keyword/careers';

}
