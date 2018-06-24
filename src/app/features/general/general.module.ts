import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';

import { components } from './components';
import { containers } from './containers';
import { GeneralRoutingModule } from './general-routing.module';
import { pages } from './pages';

const declarations = [...components, ...containers, ...pages];

export const vendorImports = [MatCardModule];

const imports = [GeneralRoutingModule, ...vendorImports];

@NgModule({
  declarations,
  imports,
})
export class GeneralModule {}
