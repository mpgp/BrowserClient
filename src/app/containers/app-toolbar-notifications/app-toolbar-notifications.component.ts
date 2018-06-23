import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-toolbar-notifications',
  templateUrl: './app-toolbar-notifications.component.html',
})
export class AppToolbarNotificationsComponent { }
