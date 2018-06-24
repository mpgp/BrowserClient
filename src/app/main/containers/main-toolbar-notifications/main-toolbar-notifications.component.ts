import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'main-toolbar-notifications',
  templateUrl: './main-toolbar-notifications.component.html',
})
export class MainToolbarNotificationsComponent {}
