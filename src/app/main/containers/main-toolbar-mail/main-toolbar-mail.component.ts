import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'main-toolbar-mail',
  templateUrl: './main-toolbar-mail.component.html',
})
export class MainToolbarMailComponent {}
