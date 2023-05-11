import { Model } from 'src/app/model';
import { Obj } from 'src/app/model/obj';

export type RelatedKeywordAttributes = {
  id: string;
  keyword_id: string;
  related_id: string;
};

export type RelatedKeywordRelations = {
  keywordObj: Obj;
  relatedObj: Obj;
};

export class RelatedKeyword extends Model<
  RelatedKeywordAttributes,
  RelatedKeywordRelations
> {
  public override readonly urlPath = 'related-keywords';
}
