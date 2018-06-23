import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-toolbar-mail',
  templateUrl: './app-toolbar-mail.component.html',
})
export class AppToolbarMailComponent { }
