import { Model } from 'src/app/model';
import { Obj } from 'src/app/model/obj';

export type LocalizableAttributes = {
  id: string;
  keyword_id: string;
  language: string;
  text: string;
};

export type LocalizableRelations = {
  keyword: Obj;
};

export class Localizable extends Model<
  LocalizableAttributes,
  LocalizableRelations
> {
  protected readonly urlPath = 'localizables';
}
