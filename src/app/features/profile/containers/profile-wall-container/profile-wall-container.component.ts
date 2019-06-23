import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'profile-wall-container',
  templateUrl: './profile-wall-container.component.html',
})
export class ProfileWallContainerComponent {

}
