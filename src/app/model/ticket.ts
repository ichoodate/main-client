import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';

export type TicketAttributes = {
  id: string;
  writer_id: string;
  subject: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type TicketRelations = {
  writer: User;
};

export class Ticket extends Model<TicketAttributes, TicketRelations> {
  protected readonly urlPath = 'tickets';
}
