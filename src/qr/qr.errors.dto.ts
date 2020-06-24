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
    fd: string;
    fp: string;
  };
}

export const createQrAlreadyExists = createError(
  QrAlreadyExists,
  QrAlreadyExistsName.QrAlreadyExists,
  ({ fd, fp }) => `Qr there fd = ${fd}; fp = ${fp}`,
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
    sLimit: number;
  };
}

export const createQrSalaryNotEnough = createError(
  QrSalaryNotEnough,
  QrSalaryNotEnoughName.QrSalaryNotEnough,
  ({ s, sLimit }) => `Qr salary not enough s = ${s} : sLimit = ${sLimit}`,
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
    nextTime: string;
    phone: string;
    qrLimit: number;
  };
}

export const createQrRegistrationLimitExceeded = createError(
  QrRegistrationLimitExceeded,
  QrRegistrationLimitExceededName.QrRegistrationLimitExceeded,
  ({ phone, qrLimit, nextTime }) =>
    `Qr registration limit (${qrLimit}) exceeded of phone = ${phone}, next qr can be added in ${new Date(
      Date.parse(nextTime),
    ).toLocaleString()}`,
);

//=====================
// PhoneIdNotFoundByPhoneName
enum PhoneIdNotFoundByPhoneName {
  PhoneIdNotFoundByPhone = 'PhoneNotFoundByPhone',
}

export class PhoneIdNotFoundByPhone implements ErrorDto {
  name: PhoneIdNotFoundByPhoneName;
  message: string;
  param: {
    phone: string;
  };
}

export const createPhoneIdNotFoundByPhone = createError(
  PhoneIdNotFoundByPhone,
  PhoneIdNotFoundByPhoneName.PhoneIdNotFoundByPhone,
  ({ phone }) => `Телефон не найден ${phone}`,
);
