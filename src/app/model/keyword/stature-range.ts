import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type StatureRangeAttributes = {
  id: string;
  min: string;
  max: string;
};

export type StatureRangeRelations = {};

export class StatureRange extends Model<
  StatureRangeAttributes,
  StatureRangeRelations
> {
  protected readonly urlPath = 'keyword/stature-ranges';
}
