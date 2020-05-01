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

export class LoginResDto implements ResDto {
  payload?: {
    access_token: string;
  };
  error: {};
}
