import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';

export type RoleAttributes = {
  id: string;
  user_id: string;
  type: string;
};

export type RoleRelations = {
  user: User;
};

export class Role extends Model<RoleAttributes, RoleRelations> {
  public override readonly urlPath = 'roles';
}
