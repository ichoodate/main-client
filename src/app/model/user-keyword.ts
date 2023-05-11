import { Model } from 'src/app/model';
import { Obj } from 'src/app/model/obj';
import { User } from 'src/app/model/user';

export type UserKeywordAttributes = {
  id: string;
  user_id: string;
  keyword_id: string;
};

export type UserKeywordRelations = {
  user: User;
  keywordObj: Obj;
};

export class UserKeyword extends Model<
  UserKeywordAttributes,
  UserKeywordRelations
> {
  public override readonly urlPath = 'user-keywords';
}
