import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type ReligionAttributes = {
  id: string,
  type: string
}

export type ReligionRelations = {

}

@Injectable()
export class Religion extends Model<ReligionAttributes, ReligionRelations> {

  protected readonly urlPath = 'keyword/religions';

}
