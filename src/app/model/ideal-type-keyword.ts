import { Model } from 'src/app/model';
import { Obj } from 'src/app/model/obj';
import { User } from 'src/app/model/user';

export type IdealTypeKeywordAttributes = {
  id: string;
  user_id: string;
  keyword_id: string;
};

export type IdealTypeKeywordRelations = {
  user: User;
  keywordObj: Obj;
};

export class IdealTypeKeyword extends Model<
  IdealTypeKeywordAttributes,
  IdealTypeKeywordRelations
> {
  protected readonly urlPath = 'ideal-type-keywords';
}
