import { Model } from 'src/app/model';
import { Obj } from 'src/app/model/obj';

export type MatchingKwdPvtAttributes = {
  id: string;
  ideal_kwd_id: string;
  self_kwd_id: string;
};

export type MatchingKwdPvtRelations = {
  ideale_kwd: Obj;
  self_kwd: Obj;
};

export class MatchingKwdPvt extends Model<
  MatchingKwdPvtAttributes,
  MatchingKwdPvtRelations
> {}
