import { Model } from 'src/app/model';

export type StatureRangeAttributes = {
  id: string;
  min: string;
  max: string;
};

export type StatureRangeRelations = {};

export class StatureRange extends Model<
  StatureRangeAttributes,
  StatureRangeRelations
> {
  public override readonly urlPath = 'keyword/stature-ranges';
}
