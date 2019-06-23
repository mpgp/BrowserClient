import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { AccountDto } from '~/core/interfaces/account.dto';
import { AccountService } from '~/core/services/account.service';
import { environment } from '~/env/environment';

export interface ErrorWithContext extends Error {
  appId: string;
  status: number | null;
  url: string;
  user: AccountDto;
}

@Injectable()
export class ErrorsLogger {
  constructor(
    private readonly accountService: AccountService,
    private readonly http: HttpClient,
    private readonly locationStrategy: LocationStrategy,
  ) {}

  logError(error: Error): Observable<void> {
    const errorWithContext = this.addContextInfo(error);
    if (!environment.production) {
      console.error({ error, errorWithContext });
    }

    return this.http.post<void>(`${environment.apiUrl}exception`, errorWithContext).pipe(
      catchError(err => {
        console.error('Can not log error!', err);

        return EMPTY;
      }),
    );
  }

  private addContextInfo(error: Error): ErrorWithContext {
    const result: ErrorWithContext = error as ErrorWithContext;
    const location = this.locationStrategy;

    result.appId = environment.clientId;
    result.message = error.message || error.toString();
    result.url = location instanceof PathLocationStrategy ? location.path() : '';
    result.user = this.accountService.authInfo && this.accountService.authInfo.user;
    result.stack = error.stack;
    result.status = (error as HttpErrorResponse).status || null;

    return result;
  }
}
