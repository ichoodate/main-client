import { Model } from 'src/app/model';

export type StatureAttributes = {
  id: string;
  type: string;
};

export type StatureRelations = {};

export class Stature extends Model<StatureAttributes, StatureRelations> {
  protected readonly urlPath = 'keyword/statures';
}
