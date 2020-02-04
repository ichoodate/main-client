import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type NoticeAttributes = {
  id: string,
  type: string,
  subject: string,
  description: string,
  created_at: string,
  updated_at: string
}

export type NoticeRelations = {

}

@Injectable()
export class Notice extends Model<NoticeAttributes, NoticeRelations> {

  protected readonly urlPath = 'notices';

}
