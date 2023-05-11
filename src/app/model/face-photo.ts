import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';

export type FacePhotoAttributes = {
  id: string;
  user_id: string;
  data: string;
  created_at: string;
};

export type FacePhotoRelations = {
  user: User;
};

export class FacePhoto extends Model<FacePhotoAttributes, FacePhotoRelations> {
  public override readonly urlPath = 'face-photos';
}
