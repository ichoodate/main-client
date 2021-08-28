import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type NationalityAttributes = {
  id: string;
  country_id: string;
};

export type NationalityRelations = {};

export class Nationality extends Model<
  NationalityAttributes,
  NationalityRelations
> {
  protected readonly urlPath = 'keyword/nationalities';
}
