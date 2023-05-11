import { Model } from 'src/app/model';
import { Obj } from 'src/app/model/obj';
import { User } from 'src/app/model/user';

export type ActivityAttributes = {
  id: string;
  user_id: string;
  related_id: string;
  type: string;
  created_at: string;
};

export type ActivityRelations = {
  related: Obj;
  user: User;
};

export class Activity extends Model<ActivityAttributes, ActivityRelations> {
  public override readonly urlPath = 'activities';
}
