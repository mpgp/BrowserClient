import { AccountDto } from './account.dto';
import { HttpError } from './http-error.dto';

export class AuthInfo implements HttpError {
  authToken: string;
  user: AccountDto;
  errorCode: number;
  message: string;
}
