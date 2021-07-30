import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type WeightRangeAttributes = {
  id: string,
  min: string,
  max: string
}

export type WeightRangeRelations = {

}

export class WeightRange extends Model<WeightRangeAttributes, WeightRangeRelations> {

  protected readonly urlPath = 'keyword/weight-ranges';

}
