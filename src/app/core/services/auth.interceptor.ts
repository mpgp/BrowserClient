import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, retryWhen, scan } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<{}>, next: HttpHandler): Observable<HttpEvent<{}>> {
    const newRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ...xAuthToken...`,
      },
    });

    return next.handle(newRequest).pipe(
      retryWhen(err =>
        err.pipe(
          scan(retryCount => {
            if (retryCount < 2) {
              return retryCount + 1;
            }
            throw new Error('Retry limit exceeded!');
          }, 0), // tslint:disable-line:align
          delay(2000),
        ),
      ),
    );
  }
}
