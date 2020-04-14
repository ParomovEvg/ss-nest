import { createError, ErrorDto } from '../asets/error.dto';
import { QrErrorsDto } from './qr.dto';

//=====================
// QrAlreadyExists
enum QrAlreadyExistsName {
  QrAlreadyExists = QrErrorsDto.QrAlreadyExists,
}

export class QrAlreadyExists implements ErrorDto {
  name: QrAlreadyExistsName;
  message: string;
  param: {

  };
}

export const createQrAlreadyExists = createError(
  QrAlreadyExists,
  QrAlreadyExistsName.QrAlreadyExists,
  () => ``,
);
//=====================
// QrSalaryNotEnough
enum QrSalaryNotEnoughName {
  QrSalaryNotEnough = QrErrorsDto.QrSalaryNotEnough,
}

export class QrSalaryNotEnough implements ErrorDto {
  name: QrSalaryNotEnoughName;
  message: string;
  param: {
    s: number;
  };
}

export const createQrSalaryNotEnough = createError(
  QrSalaryNotEnough,
  QrSalaryNotEnoughName.QrSalaryNotEnough,
  ({s}) => `Qr salary not enough s = ${s}`,
);
//=====================
// QrRegistrationLimitExceeded
enum QrRegistrationLimitExceededName {
  QrRegistrationLimitExceeded = QrErrorsDto.QrRegistrationLimitExceeded,
}

export class QrRegistrationLimitExceeded implements ErrorDto {
  name: QrRegistrationLimitExceededName;
  message: string;
  param: {
    phone: string
  };
}

export const createQrRegistrationLimitExceeded = createError(
  QrRegistrationLimitExceeded,
  QrRegistrationLimitExceededName.QrRegistrationLimitExceeded,
  ({ phone }) => `Qr registration limit exceeded of phone = ${phone}`,
);




