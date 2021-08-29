import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';

export type ProfilePhotoAttributes = {
  id: string;
  user_id: string;
  data: string;
  created_at: string;
};

export type ProfilePhotoRelations = {
  user: User;
};

export class ProfilePhoto extends Model<
  ProfilePhotoAttributes,
  ProfilePhotoRelations
> {
  protected readonly urlPath = 'profile-photos';
}
