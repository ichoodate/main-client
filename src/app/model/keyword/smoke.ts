import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type SmokeAttributes = {
  id: string,
  type: string
}

export type SmokeRelations = {

}

@Injectable()
export class Smoke extends Model<SmokeAttributes, SmokeRelations> {

  protected readonly urlPath = 'keyword/smokes';

}
