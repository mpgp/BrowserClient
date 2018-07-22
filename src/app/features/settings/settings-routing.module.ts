import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsRootComponent } from './pages';

const routes: Routes = [{ path: '', component: SettingsRootComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class SettingsRoutingModule {}
