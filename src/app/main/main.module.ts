import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { components } from './components';
import { containers } from './containers';
import { AuthGuard } from './guards/auth.guard';
import { MainRoutingModule } from './main-routing.module';
import { MainRootComponent, pages } from './pages';

const declarations = [...components, ...containers, ...pages];

export const vendorImports = [MatBadgeModule, MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatToolbarModule];

const imports = [CommonModule, MainRoutingModule, ...vendorImports];

const exports = [MainRootComponent];

const providers = [AuthGuard];

@NgModule({
  declarations,
  imports,
  providers,
  exports,
})
export class MainModule {}
