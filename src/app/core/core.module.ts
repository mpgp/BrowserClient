import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthInterceptor } from './services/auth.interceptor';

const authInterceptor = {
  multi: true,
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
};

const providers = [authInterceptor];

@NgModule({
  providers,
})
export class CoreModule {}
