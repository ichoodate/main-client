import { Model } from 'src/app/model';

export type DrinkAttributes = {
  id: string;
  type: string;
};

export type DrinkRelations = {};

export class Drink extends Model<DrinkAttributes, DrinkRelations> {
  protected readonly urlPath = 'keyword/drinks';
}
