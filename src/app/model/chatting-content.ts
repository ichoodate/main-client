import { Model } from 'src/app/model';
import { Match } from 'src/app/model/match';
import { User } from 'src/app/model/user';

export type ChattingContentAttributes = {
  id: string;
  match_id: string;
  writer_id: string;
  message: string;
  created_at: string;
};

export type ChattingContentRelations = {
  match: Match;
  writer: User;
};

export class ChattingContent extends Model<
  ChattingContentAttributes,
  ChattingContentRelations
> {
  protected readonly urlPath = 'chatting-contents';
}
