import { Model } from 'src/app/model';

export type AgeRangeAttributes = {
  id: string;
  min: string;
  max: string;
};

export type AgeRangeRelations = {};

export class AgeRange extends Model<AgeRangeAttributes, AgeRangeRelations> {
  protected readonly urlPath = 'keyword/age-ranges';
}
