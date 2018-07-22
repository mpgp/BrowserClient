import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AccountService } from '~/core/services/account.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly accountService: AccountService, private readonly router: Router) {}

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.accountService.isLoggedIn) {
      return true;
    }

    this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });

    return false;
  }
}
