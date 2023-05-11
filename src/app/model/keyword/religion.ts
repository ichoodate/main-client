import { Model } from 'src/app/model';

export type ReligionAttributes = {
  id: string;
  type: string;
};

export type ReligionRelations = {};

export class Religion extends Model<ReligionAttributes, ReligionRelations> {
  public override readonly urlPath = 'keyword/religions';
}
