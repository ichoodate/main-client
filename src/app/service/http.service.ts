import { Injectable, Injector } from '@angular/core';
import {
  ɵHttpInterceptingHandler,
  HttpBackend,
  HttpClient,
  HttpHandler,
  HttpXhrBackend,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AuthTokenApiInterceptor } from 'src/app/provider/interceptor/api/auth-token.provider';
import { BaseUrlApiInterceptor } from 'src/app/provider/interceptor/api/base-url.provider';
import { JsonifyApiInterceptor } from 'src/app/provider/interceptor/api/jsonify.provider';
import { ModelifyApiInterceptor } from 'src/app/provider/interceptor/api/modelify.provider';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  static apiClient: HttpClient;

  private static init(client: string, injector: Injector): HttpClient {
    if (typeof HttpService[client] == 'undefined') {
      HttpService[client] = Injector.create({
        providers: [
          {
            provide: HttpBackend,
            useValue: new HttpXhrBackend({ build: () => new XMLHttpRequest() }),
          },
          {
            provide: Injector,
            useValue: injector,
          },
          {
            provide: HttpHandler,
            useClass: ɵHttpInterceptingHandler,
            deps: [HttpBackend, Injector],
          },
          {
            provide: HttpClient,
            deps: [HttpHandler],
          },
        ],
      }).get(HttpClient);
    }

    return HttpService[client];
  }

  public static api(): HttpClient {
    return HttpService.init(
      'apiClient',
      Injector.create({
        providers: [
          {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthTokenApiInterceptor,
            multi: true,
            deps: [],
          },
          {
            provide: HTTP_INTERCEPTORS,
            useClass: BaseUrlApiInterceptor,
            multi: true,
            deps: [],
          },
          {
            provide: HTTP_INTERCEPTORS,
            useClass: JsonifyApiInterceptor,
            multi: true,
            deps: [],
          },
          {
            provide: HTTP_INTERCEPTORS,
            useClass: ModelifyApiInterceptor,
            multi: true,
            deps: [],
          },
        ],
      })
    );
  }
}
