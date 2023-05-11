import { Model } from 'src/app/model';

export type HobbyAttributes = {
  id: string;
  type: string;
};

export type HobbyRelations = {};

export class Hobby extends Model<HobbyAttributes, HobbyRelations> {
  public override readonly urlPath = 'keyword/hobbies';
}
