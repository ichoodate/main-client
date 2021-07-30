import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'
import { Model, ModelAttribute, ModelRelations } from 'src/app/model';
import { HttpService } from 'src/app/service/http.service';

export type ObjAttributes = {
  id: string,
  type: string
}

export type ObjRelations = {
  concrete?: Model<ModelAttribute, ModelRelations>
}

export class Obj extends Model<ObjAttributes, ObjRelations> {

}
