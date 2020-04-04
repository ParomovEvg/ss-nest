import { IsNotEmpty } from 'class-validator';

export class CreateQrDto {
  @IsNotEmpty()
  fn:string;
  @IsNotEmpty()
  fp:string;
  @IsNotEmpty()
  fd:string;
  @IsNotEmpty()
  s:string;
}