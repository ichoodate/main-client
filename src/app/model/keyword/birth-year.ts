import { Model } from 'src/app/model';

export type BirthYearAttributes = {
  id: string;
  type: string;
};

export type BirthYearRelations = {};

export class BirthYear extends Model<BirthYearAttributes, BirthYearRelations> {
  public override readonly urlPath = 'keyword/birth-years';
}
