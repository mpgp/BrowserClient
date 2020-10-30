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
      { path: 'general', loadChildren: () => import('../features/general/general.module').then(m => m.GeneralModule) },
      { path: 'profile/:id', loadChildren: () => import('../features/profile/profile.module').then(m => m.ProfileModule) },
      { path: 'settings', loadChildren: () => import('../features/settings/settings.module').then(m => m.SettingsModule) },
    ],
  },
  { path: 'error', component: MainErrorComponent },
  { path: 'account', loadChildren: () => import('../features/account/account.module').then(m => m.AccountModule) },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: false })],
})
export class MainRoutingModule {}
