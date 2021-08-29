import { Model } from 'src/app/model';
import { Obj } from 'src/app/model/obj';
import { User } from 'src/app/model/user';

export type UserIdealTypeKwdPvtAttributes = {
  id: string;
  user_id: string;
  keyword_id: string;
};

export type UserIdealTypeKwdPvtRelations = {
  user: User;
  keyword: Obj;
};

export class UserIdealTypeKwdPvt extends Model<
  UserIdealTypeKwdPvtAttributes,
  UserIdealTypeKwdPvtRelations
> {
  protected readonly urlPath = 'ideal-type-keywords';
}
