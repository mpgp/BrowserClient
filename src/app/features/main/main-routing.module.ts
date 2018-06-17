import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainRootComponent } from './containers';

const routes: Routes = [{ path: '', component: MainRootComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class MainRoutingModule {}
