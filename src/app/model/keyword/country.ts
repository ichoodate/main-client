import { Model } from 'src/app/model';
import { Nationality } from 'src/app/model/keyword/nationality';
import { Residence } from 'src/app/model/keyword/residence';

export type CountryAttributes = {
  id: string;
  iso: string;
  name: string;
  e164: string;
  cctld: string;
  currency: string;
  language: string;
};

export type CountryRelations = {
  nationality: Nationality;
  residence: Residence;
};

export class Country extends Model<CountryAttributes, CountryRelations> {
  public override readonly urlPath = 'keyword/countries';
}
