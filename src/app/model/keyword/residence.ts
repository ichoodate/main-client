import { Model } from 'src/app/model';
import { Obj } from 'src/app/model/obj';

export type ResidenceAttributes = {
  id: string;
  parent_id: string;
  related_id: string;
};

export type ResidenceRelations = {
  relatedObj: Obj;
  parentObj: Obj;
};

export class Residence extends Model<ResidenceAttributes, ResidenceRelations> {
  protected readonly urlPath = 'keyword/residences';
}
