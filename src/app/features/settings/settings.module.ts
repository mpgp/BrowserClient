import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';

import { MpgpFormControlErrorModule } from '~/shared';

import { components } from './components';
import { containers } from './containers';
import { pages } from './pages';
import { services } from './services/';
import { SettingsRoutingModule } from './settings-routing.module';

const declarations = [...components, ...containers, ...pages];

export const vendorImports = [MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule];

const imports = [CommonModule, FormsModule, MpgpFormControlErrorModule, ReactiveFormsModule, SettingsRoutingModule, ...vendorImports];

const providers = [...services];

@NgModule({
  declarations,
  imports,
  providers,
})
export class SettingsModule {}
