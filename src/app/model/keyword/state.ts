import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type StateAttributes = {
  id: string;
  country_id: string;
  name: string;
};

export type StateRelations = {};

export class State extends Model<StateAttributes, StateRelations> {
  protected readonly urlPath = 'keyword/states';
}
