import { Model } from 'src/app/model';
import { Card } from 'src/app/model/card';
import { User } from 'src/app/model/user';

export type CardFlipAttributes = {
  id: string;
  card_id: string;
  user_id: string;
  created_at: string;
};

export type CardFlipRelations = {
  card: Card;
  user: User;
};

export class CardFlip extends Model<CardFlipAttributes, CardFlipRelations> {
  protected readonly urlPath = 'card-flips';
}
