import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';

import { AccountService } from './services/account.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { ErrorsHandler } from './services/errors-handler.service';
import { ErrorsLogger } from './services/errors-logger.service';

const authInterceptor = {
  multi: true,
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
};

const errorsHandler = {
  provide: ErrorHandler,
  useClass: ErrorsHandler,
};

const providers = [AccountService, authInterceptor, errorsHandler, ErrorsLogger];

@NgModule({
  providers,
})
export class CoreModule {}
