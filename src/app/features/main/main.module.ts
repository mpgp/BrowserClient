import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { containers } from './containers';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [...containers],
  imports: [MainRoutingModule, SharedModule],
})
export class MainModule {}
