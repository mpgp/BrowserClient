import { AccountDto } from './account.dto';
import { HttpError } from './http-error.dto';

export interface AuthInfo extends HttpError {
  access_token: string;
  user: AccountDto;
}
