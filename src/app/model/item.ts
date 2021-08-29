import { Model } from 'src/app/model';

export type ItemAttributes = {
  id: string;
  type: string;
  original_price: string;
  final_price: string;
  currency: string;
  created_at: string;
  deleted_at: string;
};

export type ItemRelations = {};

export class Item extends Model<ItemAttributes, ItemRelations> {
  protected readonly urlPath = 'items';
}
