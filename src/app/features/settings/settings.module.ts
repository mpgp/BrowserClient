import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

import { MpgpFormControlErrorModule } from '~/shared/directives';

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
