//=====================
// GetContent
import { ResDto } from '../asets/eitherToDto';
import { ScreenContentDto } from './screen/screen.dto';

export class GetContentResDto implements ResDto {
  payload: ScreenContentDto[];
}
