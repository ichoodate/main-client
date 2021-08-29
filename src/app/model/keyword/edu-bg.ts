import { Model } from 'src/app/model';

export type EduBgAttributes = {
  id: string;
  type: string;
};

export type EduBgRelations = {};

export class EduBg extends Model<EduBgAttributes, EduBgRelations> {
  protected readonly urlPath = 'keyword/education-backgrounds';
}
