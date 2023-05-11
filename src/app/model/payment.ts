import { Model } from 'src/app/model';
import { Item } from 'src/app/model/item';
import { User } from 'src/app/model/user';

export type PaymentAttributes = {
  id: string;
  user_id: string;
  item_id: string;
  amount: string;
  created_at: string;
};

export type PaymentRelations = {
  user: User;
  item: Item;
};

export class Payment extends Model<PaymentAttributes, PaymentRelations> {
  public override readonly urlPath = 'payments';
}
