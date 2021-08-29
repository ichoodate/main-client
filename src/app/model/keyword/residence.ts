import { Model } from 'src/app/model';

export type ResidenceAttributes = {
  id: string;
  parent_id: string;
  related_id: string;
};

export type ResidenceRelations = {};

export class Residence extends Model<ResidenceAttributes, ResidenceRelations> {
  protected readonly urlPath = 'keyword/residences';
}
