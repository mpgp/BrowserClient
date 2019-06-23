import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UpdateAccountCommand } from '~/core/interfaces/update-account-command';
import { UpdatePasswordCommand } from '~/core/interfaces/update-password-command';
import { environment } from '~/env/environment';

@Injectable()
export class ManageService {
  private readonly path = `${environment.apiUrl}manage`;

  constructor(private readonly http: HttpClient) {}

  updateAccount(command: UpdateAccountCommand): Observable<never> {
    return this.http.patch<never>(this.path, command).pipe(
      catchError(_ => {
        throw new Error('Invalid data');
      }),
    );
  }

  updatePassword(command: UpdatePasswordCommand): Observable<never> {
    return this.http.patch<never>(`${this.path}/password`, command).pipe(
      catchError(_ => {
        console.error(_);
        throw new Error('Invalid data');
      }),
    );
  }
}
