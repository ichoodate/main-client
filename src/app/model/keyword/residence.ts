import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type ResidenceAttributes = {
  id: string;
  parent_id: string;
  related_id: string;
};

export type ResidenceRelations = {};

export class Residence extends Model<ResidenceAttributes, ResidenceRelations> {
  protected readonly urlPath = 'keyword/residences';
}
