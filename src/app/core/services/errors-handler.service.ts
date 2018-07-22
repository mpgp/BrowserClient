import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { environment } from '~/env/environment';

import { ErrorsLogger } from './errors-logger.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  // Because the ErrorsHandler is created before the providers,
  // We’ll have to use the Injector to get them.
  constructor(private readonly injector: Injector) {}

  handleError(error: Error | HttpErrorResponse): void {
    const zone = this.injector.get(NgZone);
    zone.run(() => {
      if (error instanceof HttpErrorResponse) {
        this.handleHttpError(error);
      } else {
        this.logError(error);
      }
    });
  }

  private handleHttpError(error: HttpErrorResponse): void {
    if (error.status === 401) {
      localStorage.removeItem('auth');
      const router = this.injector.get(Router);
      const returnUrl = window.location.pathname + window.location.search;
      router.navigateByUrl('/account/login', { queryParams: { returnUrl } });
    } else if (error.status === 403 || error.status >= 500) {
      this.logError(error);
    }
  }

  private logError(error: Error): void {
    const logger = this.injector.get(ErrorsLogger);
    logger
      .logError(error)
      .pipe(
        tap(_ => {
          setTimeout(() => document.body.click(), 0);
          if (environment.production) {
            const router = this.injector.get(Router);
            router.navigateByUrl('/error');
          }
        }),
      )
      .toPromise();
  }
}
