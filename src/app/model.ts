import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/service/http.service';

type HttpParams = {
  [param: string]:
    | string
    | number
    | boolean
    | readonly (string | number | boolean)[];
};

export type ModelAttribute = {
  [k: string]: string;
};

export type ModelRelations = {
  [k: string]:
    | Model<ModelAttribute, ModelRelations>
    | Model<ModelAttribute, ModelRelations>[];
};

export class Model<T extends ModelAttribute, R extends ModelRelations> {
  protected urlPath: string = '';
  protected attrs: T = <T>{};
  protected relations: R = <R>{};

  constructor(attrs: ModelAttribute = {}) {
    this.attrs = <T>attrs;
  }

  public getAttr(key: keyof ModelAttribute) {
    return this.attrs[key];
  }

  public getAttrs(): T {
    return this.attrs;
  }

  public setAttr(key: keyof ModelAttribute, value: string): void {
    _.set(this.attrs, key, value);
  }

  public getRelations(): R {
    return this.relations;
  }

  public setRelation(
    key: keyof ModelRelations,
    value:
      | Model<ModelAttribute, ModelRelations>
      | Model<ModelAttribute, ModelRelations>[]
  ): void {
    _.set(this.relations, key, value);
  }

  public unsetRelation(key: keyof ModelRelations): void {
    _.unset(this.relations, key);
  }

  public load$(params: HttpParams): Observable<any> {
    return HttpService.api()
      .get<Model<T, R>>(`${this.urlPath}/${this.attrs['id']}`, {
        params: params,
      })
      .pipe(
        map((model: Model<T, R>) => {
          _.forEach(model.getAttrs(), (value, key) => {
            this.setAttr(key, value);
          });
          _.forEach(model.getRelations(), (value, key) => {
            this.setRelation(key, value);
          });
        })
      );
  }

  public load(params: HttpParams): void {
    this.load$(params).subscribe();
  }
}
