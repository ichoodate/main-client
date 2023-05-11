import { Model } from 'src/app/model';
import { Residence } from 'src/app/model/keyword/residence';

export type StateAttributes = {
  id: string;
  country_id: string;
  name: string;
};

export type StateRelations = {
  residence: Residence;
};

export class State extends Model<StateAttributes, StateRelations> {
  public override readonly urlPath = 'keyword/states';
}
