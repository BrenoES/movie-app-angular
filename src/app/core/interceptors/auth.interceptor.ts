import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(protected auth: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      setParams: { api_key: this.auth.getApiKey() },
    });

    return next.handle(authReq);
  }
}
