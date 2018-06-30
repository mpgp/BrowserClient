import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from '~/env/environment';

export interface ErrorWithContext extends Error {
  appId: string;
  id: string;
  status: number | null;
  time: number;
  url: string;
  user: string;
}

@Injectable()
export class ErrorsLogger {
  constructor(private readonly locationStrategy: LocationStrategy) {}

  logError(error: Error): Observable<Error> {
    if (!environment.production) {
      console.error(error);
    }

    // TODO: Send error to server.
    return of(this.addContextInfo(error));
  }

  private addContextInfo(error: Error): ErrorWithContext {
    const name = error.name || null;
    const appId = environment.clientId;
    const user = '-';
    const time = new Date().getTime();
    const id = `${appId}-${user}-${time}`;
    const location = this.locationStrategy;
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const status = (error as HttpErrorResponse).status || null;
    const message = error.message || error.toString();
    const stack = error.stack;
    const errorWithContext = { name, appId, user, time, id, url, status, message, stack };

    return errorWithContext;
  }
}
