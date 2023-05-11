import { Model } from 'src/app/model';

export type SmokeAttributes = {
  id: string;
  type: string;
};

export type SmokeRelations = {};

export class Smoke extends Model<SmokeAttributes, SmokeRelations> {
  public override readonly urlPath = 'keyword/smokes';
}
