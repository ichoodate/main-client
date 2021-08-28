import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type HobbyAttributes = {
  id: string;
  type: string;
};

export type HobbyRelations = {};

export class Hobby extends Model<HobbyAttributes, HobbyRelations> {
  protected readonly urlPath = 'keyword/hobbies';
}
