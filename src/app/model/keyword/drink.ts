import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Model } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type DrinkAttributes = {
  id: string,
  type: string
}

export type DrinkRelations = {

}

export class Drink extends Model<DrinkAttributes, DrinkRelations> {

  protected readonly urlPath = 'keyword/drinks';

}
