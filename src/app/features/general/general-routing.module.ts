import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralRootComponent } from './pages';

const routes: Routes = [{ path: '', component: GeneralRootComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class GeneralRoutingModule {}
