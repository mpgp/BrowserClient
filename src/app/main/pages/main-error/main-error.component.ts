import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'main-error',
  styleUrls: ['./main-error.component.scss'],
  templateUrl: './main-error.component.html',
})
export class MainErrorComponent {}
