import { Model } from 'src/app/model';
import { Balance } from 'src/app/model/balance';
import { Obj } from 'src/app/model/obj';
import { User } from 'src/app/model/user';

export type CoinAttributes = {
  id: string;
  user_id: string;
  balance_id: string;
  related_id: string;
  count: string;
  created_at: string;
};

export type CoinRelations = {
  user: User;
  balance: Balance;
  related: Obj;
};

export class Coin extends Model<CoinAttributes, CoinRelations> {
  protected readonly urlPath = 'coins';
}
