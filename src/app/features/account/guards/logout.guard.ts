import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AccountService } from '~/core/services/account.service';

@Injectable()
export class LogoutGuard implements CanActivate {
  constructor(private readonly accountService: AccountService, private readonly router: Router) {}

  canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): boolean {
    if (this.accountService.isLoggedIn) {
      this.accountService.logout().toPromise();
    }

    this.router.navigateByUrl('/').then(() => location.reload());

    return false;
  }
}
