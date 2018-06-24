import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'main-toolbar-avatar',
  styleUrls: ['./main-toolbar-avatar.component.scss'],
  templateUrl: './main-toolbar-avatar.component.html',
})
export class MainToolbarAvatarComponent {}
