import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, ReplaySubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '~/env/environment';

import { AuthInfo } from '../interfaces/auth-info.dto';
import { AuthorizeAccountCommand } from '../interfaces/authorize-account-command';
import { RegisterAccountCommand } from '../interfaces/register-account-command';

@Injectable()
export class AccountService {
  private authInfoValue: AuthInfo;
  private readonly authInfoSubject$ = new ReplaySubject<AuthInfo>();
  private readonly authInfoValue$: Observable<AuthInfo>;
  private readonly path = `${environment.apiUrl}account`;
  private static readonly localStorageKey = 'auth';

  constructor(private readonly http: HttpClient, private readonly route: ActivatedRoute, private readonly router: Router) {
    this.authInfoValue = JSON.parse(localStorage.getItem(AccountService.localStorageKey) || null);
    this.authInfoValue$ = this.authInfoSubject$.asObservable();
    this.authInfoSubject$.next(this.authInfo);
  }

  get authInfo(): AuthInfo {
    return this.authInfoValue;
  }

  get authInfo$(): Observable<AuthInfo> {
    return this.authInfoValue$;
  }

  get isLoggedIn(): boolean {
    return this.authInfo != null;
  }

  login(command: AuthorizeAccountCommand): Observable<AuthInfo> {
    return this.http.post<AuthInfo>(this.path, command).pipe(
      catchError(_ => {
        throw new Error('Invalid login or password');
      }),
      tap(this.handleAuthorizationResponse),
    );
  }

  logout(): Observable<void> {
    return of(null).pipe(
      tap(_ => {
        this.saveAuthInfo(null);
        localStorage.removeItem(AccountService.localStorageKey);
      }),
    );
  }

  register(command: RegisterAccountCommand): Observable<AuthInfo> {
    return this.http.put<AuthInfo>(this.path, command).pipe(
      catchError(error => {
        if (error && error.value && error.value.status === 409) {
          throw new Error('That login is taken. Try another.');
        }
        throw new Error('Invalid input.');
      }),
      tap(this.handleAuthorizationResponse),
    );
  }

  private handleAuthorizationResponse(response: AuthInfo): void {
    if (!response.errorCode) {
      this.saveAuthInfo(response);

      if (this.route.snapshot.queryParams.returnUrl) {
        this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl);
      } else {
        this.router.navigateByUrl('/');
      }
    }
  }

  private saveAuthInfo(info: AuthInfo): void {
    localStorage.setItem(AccountService.localStorageKey, JSON.stringify(info));
    this.authInfoValue = info;
    this.authInfoSubject$.next(info);
  }
}
