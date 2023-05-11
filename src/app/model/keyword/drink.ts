import { Model } from 'src/app/model';

export type DrinkAttributes = {
  id: string;
  type: string;
};

export type DrinkRelations = {};

export class Drink extends Model<DrinkAttributes, DrinkRelations> {
  public override readonly urlPath = 'keyword/drinks';
}
