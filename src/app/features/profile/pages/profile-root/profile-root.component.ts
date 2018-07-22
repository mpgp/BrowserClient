import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'profile-root',
  templateUrl: './profile-root.component.html',
})
export class ProfileRootComponent {}
