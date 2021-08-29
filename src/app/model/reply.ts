import { Model } from 'src/app/model';
import { Ticket } from 'src/app/model/ticket';
import { User } from 'src/app/model/user';

export type ReplyAttributes = {
  id: string;
  ticket_id: string;
  writer_id: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type ReplyRelations = {
  ticket: Ticket;
  writer: User;
};

export class Reply extends Model<ReplyAttributes, ReplyRelations> {
  protected readonly urlPath = 'replies';
}
