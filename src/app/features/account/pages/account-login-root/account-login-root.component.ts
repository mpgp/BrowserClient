import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthorizeAccountCommand } from '~/core/interfaces/authorize-account-command';
import { AccountService } from '~/core/services/account.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'account-login-root',
  styleUrls: ['./account-login-root.component.scss'],
  templateUrl: './account-login-root.component.html',
})
export class AccountLoginRootComponent {
  formErorr$ = new Subject<string>();

  constructor(private readonly accountService: AccountService) {}

  onSubmit(command: AuthorizeAccountCommand): void {
    this.accountService
      .login(command)
      .pipe(
        catchError(error => {
          this.formErorr$.next(error.toString());

          return EMPTY;
        }),
      )
      .toPromise();
  }
}
