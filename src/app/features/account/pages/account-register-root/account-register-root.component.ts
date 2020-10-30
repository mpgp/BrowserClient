import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { RegisterAccountCommand } from '~/core/interfaces/register-account-command';
import { AccountService } from '~/core/services/account.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'account-register-root',
  styleUrls: ['./account-register-root.component.scss'],
  templateUrl: './account-register-root.component.html',
})
export class AccountRegisterRootComponent {
  formErorr$ = new Subject<string>();

  constructor(private readonly accountService: AccountService) {}

  register(command: RegisterAccountCommand): void {
    this.formErorr$.next('');
    this.accountService
      .register(command)
      .pipe(
        catchError(error => {
          this.formErorr$.next(error.toString());

          return EMPTY;
        }),
      )
      .toPromise();
  }
}
