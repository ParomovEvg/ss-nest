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
//=====================
// ImgVersionBeforeNotFound
enum ImgVersionBeforeNotFoundName {
  ImgVersionBeforeNotFound = 'ImgVersionBeforeNotFound',
}

export class ImgVersionBeforeNotFound implements ErrorDto {
  name: ImgVersionBeforeNotFoundName;
  message: string;
  param: {
    fieldId: number;
    imgId: number;
  };
}

export const createImgVersionBeforeNotFound = createError(
  ImgVersionBeforeNotFound,
  ImgVersionBeforeNotFoundName.ImgVersionBeforeNotFound,
  ({ fieldId }) => `Это последняя сохранённая версия поля fieldId = ${fieldId}`,
);

//=====================
// ImgNotFoundById
enum ImgNotFoundByIdName {
  ImgNotFoundById = 'ImgNotFoundById',
}

export class ImgNotFoundById implements ErrorDto {
  name: ImgNotFoundByIdName;
  message: string;
  param: {
    id: number;
  };
}

export const createImgNotFoundById = createError(
  ImgNotFoundById,
  ImgNotFoundByIdName.ImgNotFoundById,
  ({ id }) => `Изображение с id = ${id} не найдено`,
);
//=====================
// ImgNotFoundByIdInField
enum ImgNotFoundByIdInFieldName {
  ImgNotFoundByIdInField = 'ImgNotFoundByIdInField',
}

export class ImgNotFoundByIdInField implements ErrorDto {
  name: ImgNotFoundByIdInFieldName;
  message: string;
  param: {
    imgId: number;
    fieldId: number;
  };
}

export const createImgNotFoundByIdInField = createError(
  ImgNotFoundByIdInField,
  ImgNotFoundByIdInFieldName.ImgNotFoundByIdInField,
  ({ imgId, fieldId }) =>
    `Изображение imgId = ${imgId} не найдено в поле с fieldId = ${fieldId}`,
);
