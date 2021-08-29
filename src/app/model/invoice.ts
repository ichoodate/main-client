import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';

export type InvoiceAttributes = {
  id: string;
  user_id: string;
  created_at: string;
};

export type InvoiceRelations = {
  user: User;
};

export class Invoice extends Model<InvoiceAttributes, InvoiceRelations> {
  protected readonly urlPath = 'invoices';
}
