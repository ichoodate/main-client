import { Model } from 'src/app/model';

export type SmokeAttributes = {
  id: string;
  type: string;
};

export type SmokeRelations = {};

export class Smoke extends Model<SmokeAttributes, SmokeRelations> {
  protected readonly urlPath = 'keyword/smokes';
}
