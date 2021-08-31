import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JsonifyApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        let response = <HttpResponse<any>>event;
        let body = response.body;
        let isJson = true;

        try {
          JSON.parse(body);
        } catch (e) {
          isJson = false;
        }

        if (isJson) {
          response = response.clone({
            body: JSON.parse(body),
          });
        }

        return response;
      })
    );
  }
}
