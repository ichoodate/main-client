import { Model } from 'src/app/model';

export type BloodAttributes = {
  id: string;
  type: string;
};

export type BloodRelations = {};

export class Blood extends Model<BloodAttributes, BloodRelations> {
  protected readonly urlPath = 'keyword/bloods';
}
