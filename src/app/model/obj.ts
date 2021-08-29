import { Model, ModelAttribute, ModelRelations } from 'src/app/model';

export type ObjAttributes = {
  id: string;
  type: string;
};

export type ObjRelations = {
  concrete?: Model<ModelAttribute, ModelRelations>;
};

export class Obj extends Model<ObjAttributes, ObjRelations> {}
