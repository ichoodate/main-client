import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type BloodAttributes = {
  id: string,
  type: string
}

export type BloodRelations = {

}

@Injectable()
export class Blood extends Model<BloodAttributes, BloodRelations> {

  protected readonly urlPath = 'keyword/bloods';

}
