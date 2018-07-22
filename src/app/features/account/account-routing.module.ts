import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogoutGuard } from './guards/logout.guard';
import { UnauthorizedGuard } from './guards/unauthorized.guard';
import { AccountLoginRootComponent, AccountRegisterRootComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    canActivate: [UnauthorizedGuard],
    children: [{ path: 'login', component: AccountLoginRootComponent }, { path: 'register', component: AccountRegisterRootComponent }],
  },
  { path: 'logout', canActivate: [LogoutGuard] },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class AccountRoutingModule {}
