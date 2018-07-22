import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule, MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import { components } from './components';
import { containers } from './containers';
import { AuthGuard } from './guards/auth.guard';
import { MainRoutingModule } from './main-routing.module';
import { MainRootComponent, pages } from './pages';

const declarations = [...components, ...containers, ...pages];

export const vendorImports = [MatBadgeModule, MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatToolbarModule];

const imports = [CommonModule, MainRoutingModule, ...vendorImports];

const _exports = [MainRootComponent];

const providers = [AuthGuard];

@NgModule({
  declarations,
  imports,
  providers,
  exports: _exports,
})
export class MainModule {}
