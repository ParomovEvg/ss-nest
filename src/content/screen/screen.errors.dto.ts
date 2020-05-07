//=====================
// ScreenAlreadyExists
import { createError, ErrorDto } from '../../asets/error.dto';

enum ScreenAlreadyExistsName {
  ScreenAlreadyExists = 'ScreenAlreadyExists',
}

export class ScreenAlreadyExists implements ErrorDto {
  name: ScreenAlreadyExistsName;
  message: string;
  param: {
    name: string
  };
}

export const createScreenAlreadyExists = createError(
  ScreenAlreadyExists,
  ScreenAlreadyExistsName.ScreenAlreadyExists,
  ({ name }) => `Screen name = ${name} already exists`,
);

//=====================
// ScreenNotFoundById
enum ScreenNotFoundByIdName {
  ScreenNotFoundById = 'ScreenNotFoundById',
}

export class ScreenNotFoundById implements ErrorDto {
  name: ScreenNotFoundByIdName;
  message: string;
  param: {
    id: number
  };
}

export const createScreenNotFoundById = createError(
  ScreenNotFoundById,
  ScreenNotFoundByIdName.ScreenNotFoundById,
  ({ id }) => `Screen (id = ${id}) not found`,
);
