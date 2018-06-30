import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainErrorComponent } from './pages';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'general' },
  { path: 'error', component: MainErrorComponent },
  { path: 'general', loadChildren: '../features/general/general.module#GeneralModule' },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: false })],
})
export class MainRoutingModule {}
