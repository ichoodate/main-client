import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (localStorage.getItem('ichoodate-auth-token')) {
      return next.handle(
        request.clone({
          headers: request.headers.set(
            'Authorization',
            'Bearer ' + localStorage.getItem('ichoodate-auth-token')
          ),
        })
      );
    }

    return next.handle(request);
  }
}
