import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type PwdResetAttributes = {
  id: string,
  email: string,
  complete: string,
  created_at: string,
  updated_at: string
}

export type PwdResetRelations = {

}

@Injectable()
export class PwdReset extends Model<PwdResetAttributes, PwdResetRelations> {

  protected readonly urlPath = 'pwd-resets';

}
