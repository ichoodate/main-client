import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';

export type PopularityAttributes = {
  id: string;
  sender_id: string;
  receiver_id: string;
  point: string;
  created_at: string;
};

export type PopularityRelations = {
  sender: User;
  receiver: User;
};

export class Popularity extends Model<
  PopularityAttributes,
  PopularityRelations
> {
  public override readonly urlPath = 'popularities';
}
