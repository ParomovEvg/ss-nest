import { ResDto } from '../../../asets/eitherToDto';

class FlatCheckoutDto {
  id:string;
  fn:string;
  address:string;
}

export class FindAllCheckoutsResDto implements ResDto{
  payload?: FlatCheckoutDto[];
}