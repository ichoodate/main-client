import { Model } from 'src/app/model';
import { FacePhoto } from 'src/app/model/face-photo';
import { Friend } from 'src/app/model/friend';

export type UserAttributes = {
  id: string;
  email: string;
  gender: string;
  password: string;
  name: string;
  active: string;
  created_at: string;
};

export type UserRelations = {
  friend: Friend;
  facePhoto: FacePhoto;
};

export class User extends Model<UserAttributes, UserRelations> {
  protected readonly urlPath = 'users';
}
