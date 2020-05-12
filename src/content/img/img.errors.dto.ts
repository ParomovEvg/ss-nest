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

//=====================
// ImgFieldNotFoundById
enum ImgFieldNotFoundByIdName {
  ImgFieldNotFoundById = 'ImgFieldNotFoundById',
}

export class ImgFieldNotFoundById implements ErrorDto {
  name: ImgFieldNotFoundByIdName;
  message: string;
  param: {
    id: number;
  };
}

export const createImgFieldNotFoundById = createError(
  ImgFieldNotFoundById,
  ImgFieldNotFoundByIdName.ImgFieldNotFoundById,
  ({ id }) => `Img Field not found By id = ${id}`,
);
