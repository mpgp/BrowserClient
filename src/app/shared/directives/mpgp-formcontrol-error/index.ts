import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MpgpFormControlErrorDirective } from './mpgp-formcontrol-error.directive';

@NgModule({
  declarations: [MpgpFormControlErrorDirective],
  exports: [MpgpFormControlErrorDirective],
  imports: [CommonModule],
})
export class MpgpFormControlErrorModule {}
