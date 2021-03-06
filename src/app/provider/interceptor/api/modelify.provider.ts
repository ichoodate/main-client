import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable, OperatorFunction } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Model } from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class ModelifyApiInterceptor implements HttpInterceptor {
  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      filter((event: HttpEvent<any>) => {
        return event.type === HttpEventType.Response;
      }) as OperatorFunction<HttpEvent<any>, HttpResponse<any>>,
      map((response: HttpResponse<any>) => {
        let body = response.body;

        if (typeof body == 'undefined') {
          return response;
        }

        if (typeof body.errors != 'undefined') {
          for (let error in body.errors) {
            alert(JSON.stringify(body.errors[error]));
          }

          throw new Error(JSON.stringify(body.errors));
        }

        if (typeof body.result != 'object' || !body.result) {
          return response.clone({
            body: body.result,
          });
        }

        if (typeof body.result.data != 'undefined') {
          body.result.data = this.objectify(body.result.data);
        } else {
          body.result = this.objectify(body.result);
        }

        return response.clone({
          body: body.result,
        });
      })
    );
  }

  public objectify(data: any) {
    let isModel = Array.isArray(data) ? false : true;
    let collect = isModel ? [data] : data;
    let models = _.map(collect, (item: any) => {
      let type = item._type;
      let attributes = item._attributes;
      let relations = item._relations;
      let modelClass = _.upperFirst(_.camelCase(type.split('/').pop()));
      let moduleLoader = require('src/app/model/' + type.replace(/_/g, '-'));
      let model = <Model<any, any>>new moduleLoader[modelClass]();

      _.each(attributes, (value, key) => {
        model.setAttr(key, value);
      });

      _.each(relations, (value: any, key: any) => {
        model.setRelation(key, value == null ? value : this.objectify(value));
      });

      return model;
    });

    return isModel ? models[0] : models;
  }
}
