import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type BodyAttributes = {
  id: string,
  type: string
}

export type BodyRelations = {

}

export class Body extends Model<BodyAttributes, BodyRelations> {

  protected readonly urlPath = 'keyword/bodies';

}
