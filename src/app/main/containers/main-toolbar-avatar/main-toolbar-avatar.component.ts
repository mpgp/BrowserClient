import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AccountService } from '~/core/services/account.service';
import { environment } from '~/env/environment';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'main-toolbar-avatar',
  styleUrls: ['./main-toolbar-avatar.component.scss'],
  templateUrl: './main-toolbar-avatar.component.html',
})
export class MainToolbarAvatarComponent {
  constructor(private readonly accountService: AccountService) { }

  get userAvatar$(): Observable<string> {
    return this.accountService.authInfo$.pipe(
      filter(x => !!x),
      map(x => environment.imageUrl + x.user.avatar),
    );
  }

  get userId(): number {
    return this.accountService.authInfo.user.id;
  }
}
