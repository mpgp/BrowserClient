import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileRootComponent } from './pages';

const routes: Routes = [{ path: '', component: ProfileRootComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ProfileRoutingModule {}
