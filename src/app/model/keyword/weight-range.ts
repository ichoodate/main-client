import { Model } from 'src/app/model';

export type WeightRangeAttributes = {
  id: string;
  min: string;
  max: string;
};

export type WeightRangeRelations = {};

export class WeightRange extends Model<
  WeightRangeAttributes,
  WeightRangeRelations
> {
  public override readonly urlPath = 'keyword/weight-ranges';
}
