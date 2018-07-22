import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { MpgpFormControlErrorModule } from '~/shared';

import { AccountRoutingModule } from './account-routing.module';
import { components } from './components';
import { containers } from './containers';
import { LogoutGuard } from './guards/logout.guard';
import { UnauthorizedGuard } from './guards/unauthorized.guard';
import { pages } from './pages';

const declarations = [...components, ...containers, ...pages];

export const vendorImports = [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule];

const imports = [AccountRoutingModule, CommonModule, FormsModule, MpgpFormControlErrorModule, ReactiveFormsModule, ...vendorImports];
const providers = [LogoutGuard, UnauthorizedGuard];

@NgModule({
  declarations,
  imports,
  providers,
})
export class AccountModule {}
