import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MpgpFormControlErrorModule } from '~/shared/directives';

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
