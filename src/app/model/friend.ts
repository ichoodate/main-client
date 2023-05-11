import { Model } from 'src/app/model';
import { Match } from 'src/app/model/match';
import { User } from 'src/app/model/user';

export type FriendAttributes = {
  id: string;
  sender_id: string;
  receiver_id: string;
  match_id: string;
  created_at: string;
};

export type FriendRelations = {
  sender: User;
  receiver: User;
  match: Match;
};

export class Friend extends Model<FriendAttributes, FriendRelations> {
  public override readonly urlPath = 'friends';
}
