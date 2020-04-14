import { createError, ErrorDto } from '../../asets/error.dto';
import { DrawErrors } from './draw.dto';

export enum DatesAreTakenNames {
  DatesAreTaken = DrawErrors.DatesAreTaken,
}

export class DatesAreTaken implements ErrorDto {
  name: DatesAreTakenNames;
  message: string;
  param: {
    startTaken: string ;
    endTaken: string ;
    start: string ;
    end: string ;
  };
}

export const createDatesAreTaken = createError(
  DatesAreTaken,
  DatesAreTakenNames.DatesAreTaken,
  ({ start, end, startTaken, endTaken }) => {
    try {
      const startF = new Date(start).toLocaleString('ru-RU');
      const endF = new Date(end).toLocaleString('ru-RU');
      const startTakenF = new Date(startTaken).toLocaleString('ru-RU');
      const endTakenF = new Date(endTaken).toLocaleString('ru-RU');
      return `
${startF} --- ${endF} 
are already in the gap 
${startTakenF} --- ${endTakenF}
`;
    } catch (e) {
      return e.name;
    }
  },
);

enum EndEarlierThanStartName {
  EndEarlierThanStart = DrawErrors.EndEarlierThanStart,
}

export class EndEarlierThanStart implements ErrorDto {
  name: EndEarlierThanStartName;
  message: string;
  param: {
    start: string;
    end: string;
  };
}

export const createEndEarlierThanStart = createError(
  EndEarlierThanStart,
  EndEarlierThanStartName.EndEarlierThanStart,
  ({ start, end }) => {
    try {
      const startF = new Date(start).toLocaleString('ru-RU');
      const endF = new Date(end).toLocaleString('ru-RU');
      return `${endF} - end Date 
earlier than
${startF} - start Date
`;
    } catch (e) {
      return e.name;
    }
  },
);

enum DrawNotFoundByIdName {
  DrawNotFoundById = DrawErrors.DrawNotFoundById,
}

export class DrawNotFoundById implements ErrorDto {
  name: DrawNotFoundByIdName;
  message: string;
  param: {
    id: number;
  };
}

export const createDrawNotFoundById = createError(
  DrawNotFoundById,
  DrawNotFoundByIdName.DrawNotFoundById,
  ({ id }) => `Draw where id = ${id} not found`,
);

enum NotDrawNowName {
  NotDrawNow = DrawErrors.NotDrawNow,
}

export class NotDrawNow implements ErrorDto {
  name: NotDrawNowName;
  message: string;
  param: {
    now: string;
  };
}

export const createNotDrawNow = createError(
  NotDrawNow,
  NotDrawNowName.NotDrawNow,
  ({ now }) => `There are no active draws now : ${now}`,
);

enum DateNotValidName {
  DateNotValid = DrawErrors.DateNotValid,
}

export class DateNotValid implements ErrorDto {
  name: DateNotValidName;
  message: string;
  param: {
    dateString: string;
  };
}

export const createDateNotValid = createError(
  DateNotValid,
  DateNotValidName.DateNotValid,
  ({ dateString }) => `Date string not valid ${dateString}`,
);
