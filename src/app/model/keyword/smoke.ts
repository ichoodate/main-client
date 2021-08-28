import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type SmokeAttributes = {
  id: string;
  type: string;
};

export type SmokeRelations = {};

export class Smoke extends Model<SmokeAttributes, SmokeRelations> {
  protected readonly urlPath = 'keyword/smokes';
}
