import { Model } from 'src/app/model';
import { Payment } from 'src/app/model/payment';
import { User } from 'src/app/model/user';

export type SubscriptionAttributes = {
  id: string;
  user_id: string;
  payment_id: string;
  type: string;
  created_at: string;
  deleted_at: string;
};

export type SubscriptionRelations = {
  user: User;
  payment: Payment;
};

export class Subscription extends Model<
  SubscriptionAttributes,
  SubscriptionRelations
> {
  public override readonly urlPath = 'subscriptions';
}
