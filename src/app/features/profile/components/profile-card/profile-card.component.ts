import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { AccountDto } from '~/core/interfaces/account.dto';
import { environment } from '~/env/environment';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'profile-card',
  styleUrls: ['./profile-card.component.scss'],
  templateUrl: './profile-card.component.html',
})
export class ProfileCardComponent {
  @Input() account!: AccountDto;
  @Output() addedFriend: EventEmitter<number> = new EventEmitter<number>();
  @Output() openedDialog: EventEmitter<number> = new EventEmitter<number>();

  get userAvatar(): string {
    return environment.imageUrl + this.account.avatar;
  }

  addFriend(): void {
    this.addedFriend.emit(this.account.id);
  }

  openDialog(): void {
    this.openedDialog.emit(this.account.id);
  }
}
