import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  styleUrls: ['./app-root.component.scss'],
  templateUrl: './app-root.component.html',
})
export class AppRootComponent {}
