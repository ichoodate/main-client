import { Model } from 'src/app/model';

export type PwdResetAttributes = {
  id: string;
  email: string;
  complete: string;
  created_at: string;
  updated_at: string;
};

export type PwdResetRelations = {};

export class PwdReset extends Model<PwdResetAttributes, PwdResetRelations> {
  protected readonly urlPath = 'pwd-resets';
}
