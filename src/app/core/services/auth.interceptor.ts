import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, retryWhen, scan, tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly errorHandler: ErrorHandler) {}

  intercept(request: HttpRequest<{}>, next: HttpHandler): Observable<HttpEvent<{}>> {
    const newRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ...xAuthToken...`,
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

            return of(error);
          }),
        ),
      ),
    );
  }
}
