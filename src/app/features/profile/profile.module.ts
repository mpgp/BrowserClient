import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { components } from './components';
import { containers } from './containers';
import { pages } from './pages';
import { ProfileRoutingModule } from './profile-routing.module';

const declarations = [...components, ...containers, ...pages];

export const vendorImports = [MatButtonModule, MatCardModule];

const imports = [CommonModule, ProfileRoutingModule, ...vendorImports];

@NgModule({
  declarations,
  imports,
})
export class ProfileModule {}
