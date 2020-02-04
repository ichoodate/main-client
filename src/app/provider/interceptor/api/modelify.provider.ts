import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Model } from 'src/app/model';
import { User } from 'src/app/model/user';
import { Observable, from, forkJoin, of, ObservableInput } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModelifyApiInterceptor implements HttpInterceptor {

  public intercept(request: HttpRequest<any>, next: HttpHandler): any {

    return next.handle(request).pipe(
      switchMap((event: HttpEvent<any>): any => {

        let response = <HttpResponse<any>>event;
        let body = response.body;

        if ( typeof body == 'undefined' ) {

          return forkJoin(of(response));
        }

        if ( typeof body.errors != 'undefined' ) {

          for (let error in body.errors) {
            alert(JSON.stringify(body.errors[error]));
          }

          return forkJoin(of(response));
        }

        if ( typeof body.result != 'object' ) {

          return forkJoin(of(response));
        }

        return forkJoin(of(response), of(this.objectify(body.result)));
      }),
      map(([response, result]) => {

        if ( typeof result != 'undefined' ) {

          return response.clone({
            body: result
          });
        }

        return response;
      })
    );
  }

  public objectify(data: any) {

    let isModel = Array.isArray(data) ? false : true;
    let collect = isModel ? [data] : data;
    let models  = _.map(collect, (item: any) => {

      let type         = item._type;
      let attributes   = item._attributes;
      let relations    = item._relations;
      let modelClass   = _.upperFirst(_.camelCase(type.split('/').pop()));
      let moduleLoader = require('src/app/model/' + type.replace(/_/g, '-'));
      let model        = <Model<any, any>>new moduleLoader[modelClass];

      _.each(attributes, (value, key) => {
        model.setAttr(key, value);
      });

      _.each(relations, (value:any, key:any) => {
        model.setRelation(key, this.objectify(value));
      });

      return model;
    });

    return isModel ? models[0] : models;
  }

}
