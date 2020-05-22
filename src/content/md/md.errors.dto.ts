//=====================
// MdFieldAlreadyExistInScreen
import { createError, ErrorDto } from '../../asets/error.dto';

enum MdFieldAlreadyExistInScreenName {
  MdFieldAlreadyExistInScreen = 'MdFieldAlreadyExistInScreen',
}

export class MdFieldAlreadyExistInScreen implements ErrorDto {
  name: MdFieldAlreadyExistInScreenName;
  message: string;
  param: {
    screenId: number;
    name: string;
  };
}

export const createMdFieldAlreadyExistInScreen = createError(
  MdFieldAlreadyExistInScreen,
  MdFieldAlreadyExistInScreenName.MdFieldAlreadyExistInScreen,
  ({ screenId, name }) =>
    `Поле с именем ${name} уже есть в экране с id = ${screenId}`,
);
//=====================
// MdFieldNotFoundById 
enum MdFieldNotFoundByIdName {
  MdFieldNotFoundById = 'MdFieldNotFoundById',
}

export class MdFieldNotFoundById implements ErrorDto {
  name: MdFieldNotFoundByIdName;
  message: string;
  param: {
    fieldId: number
  };
}

export const createMdFieldNotFoundById = createError(
  MdFieldNotFoundById,
  MdFieldNotFoundByIdName.MdFieldNotFoundById,
  ({ fieldId }) => `Поле с id ${fieldId}`,
);

