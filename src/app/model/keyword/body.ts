import { Model } from 'src/app/model';

export type BodyAttributes = {
  id: string;
  type: string;
};

export type BodyRelations = {};

export class Body extends Model<BodyAttributes, BodyRelations> {
  public override readonly urlPath = 'keyword/bodies';
}
