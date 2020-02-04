import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type ResidenceAttributes = {
  id: string,
  parent_id: string,
  related_id: string
}

export type ResidenceRelations = {

}

@Injectable()
export class Residence extends Model<ResidenceAttributes, ResidenceRelations> {

  protected readonly urlPath = 'keyword/residences';

}
