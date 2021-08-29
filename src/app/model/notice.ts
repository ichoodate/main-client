import { Model } from 'src/app/model';

export type NoticeAttributes = {
  id: string;
  type: string;
  subject: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type NoticeRelations = {};

export class Notice extends Model<NoticeAttributes, NoticeRelations> {
  protected readonly urlPath = 'notices';
}
