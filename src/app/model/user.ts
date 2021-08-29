import { Model } from 'src/app/model';

export type UserAttributes = {
  id: string;
  email: string;
  gender: string;
  password: string;
  name: string;
  active: string;
  created_at: string;
};

export type UserRelations = {};

export class User extends Model<UserAttributes, UserRelations> {
  protected readonly urlPath = 'users';
}
