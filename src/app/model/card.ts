import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Model } from 'src/app/model';
import { CardGroup } from 'src/app/model/card-group';
import { Match } from 'src/app/model/match';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

export type CardAttributes = {
  id: string,
  chooser_id: string,
  showner_id: string,
  match_id: string,
  group_id: string,
  updated_at: string,
  created_at: string
}

export type CardRelations = {
  chooser: User,
  showner: User,
  match: Match,
  group: CardGroup
}

export class Card extends Model<CardAttributes, CardRelations> {

  protected readonly urlPath = 'cards';

}
