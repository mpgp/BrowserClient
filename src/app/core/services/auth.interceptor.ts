import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, retryWhen, scan, tap } from 'rxjs/operators';

import { AccountService } from './account.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly accountService: AccountService, private readonly errorHandler: ErrorHandler) { }

  intercept(request: HttpRequest<{}>, next: HttpHandler): Observable<HttpEvent<{}>> {
    const authorizationHeader = {};
    if (this.accountService.isLoggedIn) {
      // @ts-ignore
      const authToken = this.accountService.authInfo.authToken;
      // @ts-ignore
      authorizationHeader['Authorization'] = `Bearer ${authToken}`;
    }

    const newRequest = request.clone({
      setHeaders: {
        ...authorizationHeader,
      },
    });

    return next.handle(newRequest).pipe(
      retryWhen(err =>
        err.pipe(
          tap(error => {
            if (error.status !== 503) {
              throw error;
            }
          }),
          scan(retryCount => {
            if (retryCount < 5) {
              return retryCount + 1;
            }
            throw new Error('Retry limit exceeded!');
          }, 0), // tslint:disable-line:align
          delay(2000),
          catchError(error => {
            this.errorHandler.handleError(error);
            throw of(error);
          }),
        ),
      ),
    );
  }
}
