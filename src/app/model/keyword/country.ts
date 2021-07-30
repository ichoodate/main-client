import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type CountryAttributes = {
  id: string,
  iso: string,
  name: string,
  e164: string,
  cctld: string,
  currency: string,
  language: string
}

export type CountryRelations = {

}

export class Country extends Model<CountryAttributes, CountryRelations> {

  protected readonly urlPath = 'keyword/countries';

}
