//=====================
// ImgFieldAlreadyExistsInScreen
import { createError, ErrorDto } from '../../asets/error.dto';

enum ImgFieldAlreadyExistsInScreenName {
  ImgFieldAlreadyExistsInScreen = 'ImgFieldAlreadyExistsInScreen',
}

export class ImgFieldAlreadyExistsInScreen implements ErrorDto {
  name: ImgFieldAlreadyExistsInScreenName;
  message: string;
  param: {
    name: string;
    screenId: number;
  };
}

export const createImgFieldAlreadyExistsInScreen = createError(
  ImgFieldAlreadyExistsInScreen,
  ImgFieldAlreadyExistsInScreenName.ImgFieldAlreadyExistsInScreen,
  ({ name, screenId }) =>
    `Img field ${name} already exists in screenId = ${screenId}`,
);
