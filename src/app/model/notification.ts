import { Model } from 'src/app/model';
import { Activity } from 'src/app/model/activity';
import { User } from 'src/app/model/user';

export type NotificationAttributes = {
  id: string;
  user_id: string;
  activity_id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
};

export type NotificationRelations = {
  user: User;
  activity: Activity;
};

export class Notification extends Model<
  NotificationAttributes,
  NotificationRelations
> {
  protected readonly urlPath = 'notifications';
}
