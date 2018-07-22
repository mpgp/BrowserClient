import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { MainErrorComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'general' },
      { path: 'general', loadChildren: '../features/general/general.module#GeneralModule' },
    ],
  },
  { path: 'error', component: MainErrorComponent },
  { path: 'account', loadChildren: '../features/account/account.module#AccountModule' },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: false })],
})
export class MainRoutingModule {}
