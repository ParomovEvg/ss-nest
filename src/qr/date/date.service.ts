import { Injectable } from '@nestjs/common';
import {
  createDateNotValid,
  createDatesAreTaken,
  createEndEarlierThanStart,
  DateNotValid,
  DatesAreTaken,
  EndEarlierThanStart,
} from '../draw/draw.errors.dto';
import { Draw } from '../draw/draw.entity';
import { Either, left, right } from 'useful-monads';

@Injectable()
export class DateService {
  async checkDateRangeAreFree(
    draws: Draw[],
    start: Date,
    end: Date,
  ): Promise<Either<DatesAreTaken, [Date, Date]>> {
    return draws
      .map<Either<DatesAreTaken, [Date, Date]>>(draw => {
        const drawStartNumber = +draw.start;
        const drawEndNumber = +draw.end;

        if (+end < drawStartNumber || +start >= drawEndNumber) {
          return right([start, end]);
        } else {
          return left(
            createDatesAreTaken({
              start: start.toISOString(),
              end: end.toISOString(),
              startTaken: new Date(drawStartNumber).toISOString(),
              endTaken: new Date(drawEndNumber).toISOString(),
            }),
          );
        }
      })
      .reduce((lastEither, next) => {
        return lastEither.chain(() => next);
      }, right([start, end]));
  }

  checkEndStartPosition(
    start: Date,
    end: Date,
  ): Either<EndEarlierThanStart, [Date, Date]> {
    if (+end - +start  < -1) {
      return left(
        createEndEarlierThanStart({
          end: end.toISOString(),
          start: start.toISOString(),
        }),
      );
    }
    return right([start, end]);
  }

  parseDateString(dateString: string): Either<DateNotValid, Date> {
    try {
      return right(new Date(Date.parse(dateString)));
    } catch (e) {
      return left(createDateNotValid({ dateString: e.toISOString() }));
    }
  }
}
