import { Model } from 'src/app/model';
import { Card } from 'src/app/model/card';
import { User } from 'src/app/model/user';

export type CardGroupAttributes = {
  id: string;
  user_id: string;
  type: string;
  created_at: string;
};

export type CardGroupRelations = {
  cards: Card[];
  user: User;
};

export class CardGroup extends Model<CardGroupAttributes, CardGroupRelations> {
  public override readonly urlPath = 'card-groups';
}
