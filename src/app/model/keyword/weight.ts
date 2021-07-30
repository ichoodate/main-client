import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type WeightAttributes = {
  id: string,
  type: string
}

export type WeightRelations = {

}

export class Weight extends Model<WeightAttributes, WeightRelations> {

  protected readonly urlPath = 'keyword/weights';

}
