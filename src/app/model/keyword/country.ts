import { Model } from 'src/app/model';

export type CountryAttributes = {
  id: string;
  iso: string;
  name: string;
  e164: string;
  cctld: string;
  currency: string;
  language: string;
};

export type CountryRelations = {};

export class Country extends Model<CountryAttributes, CountryRelations> {
  protected readonly urlPath = 'keyword/countries';
}
