import { Model } from 'src/app/model';

export type WeightAttributes = {
  id: string;
  type: string;
};

export type WeightRelations = {};

export class Weight extends Model<WeightAttributes, WeightRelations> {
  public override readonly urlPath = 'keyword/weights';
}
