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
  protected readonly urlPath = 'keyword/stature-ranges';
}
