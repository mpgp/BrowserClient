import { AccountDto } from './account.dto';
import { HttpError } from './http-error.dto';

export class AuthInfo implements HttpError {
  authToken: string;
  user: AccountDto;
  errorCode: number;
  message: string;

  constructor(info?: AuthInfo) {
    if (info) {
      this.authToken = info.authToken;
      this.user = info.user;
      this.errorCode = info.errorCode;
      this.message = info.message;
    } else {
      this.authToken = '';
      this.user = new AccountDto();
      this.errorCode = 0;
      this.message = '';
    }
  }
}
