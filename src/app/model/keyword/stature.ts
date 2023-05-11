import { Model } from 'src/app/model';

export type StatureAttributes = {
  id: string;
  cm: string;
  inch: string;
};

export type StatureRelations = {};

export class Stature extends Model<StatureAttributes, StatureRelations> {
  public override readonly urlPath = 'keyword/statures';
}
