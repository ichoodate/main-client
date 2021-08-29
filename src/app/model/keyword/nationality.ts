import { Model } from 'src/app/model';
import { Country } from 'src/app/model/keyword/country';

export type NationalityAttributes = {
  id: string;
  country_id: string;
};

export type NationalityRelations = {
  country: Country;
};

export class Nationality extends Model<
  NationalityAttributes,
  NationalityRelations
> {
  protected readonly urlPath = 'keyword/nationalities';
}
