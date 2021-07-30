import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type LanguageAttributes = {
  id: string,
  type: string
}

export type LanguageRelations = {

}

export class Language extends Model<LanguageAttributes, LanguageRelations> {

  protected readonly urlPath = 'keyword/languages';

}
