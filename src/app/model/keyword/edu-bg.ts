import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type EduBgAttributes = {
  id: string,
  type: string
}

export type EduBgRelations = {

}

export class EduBg extends Model<EduBgAttributes, EduBgRelations> {

  protected readonly urlPath = 'keyword/education-backgrounds';

}
