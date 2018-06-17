import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-toolbar-avatar',
  styleUrls: ['./app-toolbar-avatar.component.scss'],
  templateUrl: './app-toolbar-avatar.component.html',
})
export class AppToolbarAvatarComponent {}
