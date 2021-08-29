import { Model } from 'src/app/model';

export type LanguageAttributes = {
  id: string;
  type: string;
};

export type LanguageRelations = {};

export class Language extends Model<LanguageAttributes, LanguageRelations> {
  protected readonly urlPath = 'keyword/languages';
}
