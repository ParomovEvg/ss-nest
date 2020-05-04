//=====================
// Login
import { ResDto } from '../asets/eitherToDto';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  phone: string;
}

export class LoginResPayload {
  access_token: string;
}

export class LoginResDto implements ResDto {
  payload?: LoginResPayload;
  error: {};
}
