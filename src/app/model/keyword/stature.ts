import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type StatureAttributes = {
  id: string,
  type: string
}

export type StatureRelations = {

}

@Injectable()
export class Stature extends Model<StatureAttributes, StatureRelations> {

  protected readonly urlPath = 'keyword/statures';

}
