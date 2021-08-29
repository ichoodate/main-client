import { Model } from 'src/app/model';

export type StateAttributes = {
  id: string;
  country_id: string;
  name: string;
};

export type StateRelations = {};

export class State extends Model<StateAttributes, StateRelations> {
  protected readonly urlPath = 'keyword/states';
}
