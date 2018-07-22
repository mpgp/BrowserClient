import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AccountService } from '~/core/services/account.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'main-root',
  styleUrls: ['./main-root.component.scss'],
  templateUrl: './main-root.component.html',
})
export class MainRootComponent {
  constructor(public accountService: AccountService) {}
}
