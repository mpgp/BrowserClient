import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AccountDto } from '~/core/interfaces/account.dto';
import { AccountService } from '~/core/services/account.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'profile-card-container',
  templateUrl: './profile-card-container.component.html',
})
export class ProfileCardContainerComponent {
  constructor(private readonly accountService: AccountService) { }

  get account(): AccountDto {
    return this.accountService.authInfo.user;
  }

  addFriend(id: number): void {
    console.error('TODO: ', id);
  }

  openDialog(id: number): void {
    console.error('TODO: ', id);
  }
}
