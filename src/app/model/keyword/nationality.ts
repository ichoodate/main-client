import { Model } from 'src/app/model';

export type NationalityAttributes = {
  id: string;
  country_id: string;
};

export type NationalityRelations = {};

export class Nationality extends Model<
  NationalityAttributes,
  NationalityRelations
> {
  protected readonly urlPath = 'keyword/nationalities';
}
