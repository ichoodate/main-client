import { Model } from 'src/app/model';

export type CareerAttributes = {
  id: string;
  parent_id: string;
  name: string;
  type: string;
};

export type CareerRelations = {};

export class Career extends Model<CareerAttributes, CareerRelations> {
  public override readonly urlPath = 'keyword/careers';
}
