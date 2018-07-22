import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UpdateAccountCommand } from '~/core/interfaces/update-account-command';
import { UpdatePasswordCommand } from '~/core/interfaces/update-password-command';

import { ManageService } from '../../services';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'settings-account-container',
  templateUrl: './settings-account-container.component.html',
})
export class SettingsAccountContainerComponent {
  accountErorr$ = new Subject<string>();
  passwordErorr$ = new Subject<string>();

  constructor(private readonly manageService: ManageService) {}

  updateAccount(command: UpdateAccountCommand): void {
    this.accountErorr$.next('');
    this.manageService
      .updateAccount(command)
      .pipe(
        catchError(error => {
          this.accountErorr$.next(error.toString());

          return EMPTY;
        }),
      )
      .toPromise();
  }

  updatePassword(command: UpdatePasswordCommand): void {
    this.passwordErorr$.next('');
    this.manageService
      .updatePassword(command)
      .pipe(
        catchError(error => {
          this.passwordErorr$.next(error.toString());

          return EMPTY;
        }),
      )
      .toPromise();
  }
}
