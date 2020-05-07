//=====================
// TextFieldNotFoundById
import { createError, ErrorDto } from '../../asets/error.dto';

enum TextFieldNotFoundByIdName {
  TextFieldNotFoundById = 'TextFieldNotFoundById',
}

export class TextFieldNotFoundById implements ErrorDto {
  name: TextFieldNotFoundByIdName;
  message: string;
  param: {
    id: number;
  };
}

export const createTextFieldNotFoundById = createError(
  TextFieldNotFoundById,
  TextFieldNotFoundByIdName.TextFieldNotFoundById,
  ({ id }) => `Text (id = ${id}) not found`,
);
//=====================
// TextFieldAlreadyExists
enum TextFieldAlreadyExistsName {
  TextFieldAlreadyExists = 'TextFieldAlreadyExists',
}

export class TextFieldAlreadyExists implements ErrorDto {
  name: TextFieldAlreadyExistsName;
  message: string;
  param: {
    name: string;
    screenId: number;
  };
}

export const createTextFieldAlreadyExists = createError(
  TextFieldAlreadyExists,
  TextFieldAlreadyExistsName.TextFieldAlreadyExists,
  ({ name, screenId }) =>
    `Text field ${name} already exists in screen id = ${screenId}`,
);
