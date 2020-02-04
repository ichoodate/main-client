import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type AgeRangeAttributes = {
  id: string,
  min: string,
  max: string
}

export type AgeRangeRelations = {

}

@Injectable()
export class AgeRange extends Model<AgeRangeAttributes, AgeRangeRelations> {

  protected readonly urlPath = 'keyword/age-ranges';

}
