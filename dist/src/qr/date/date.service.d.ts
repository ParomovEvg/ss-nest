import { DateNotValid, DatesAreTaken, EndEarlierThanStart } from '../draw/draw.errors.dto';
import { Draw } from '../draw/draw.entity';
import { Either } from 'useful-monads';
export declare class DateService {
    checkDateRangeAreFree(draws: Draw[], start: Date, end: Date): Promise<Either<DatesAreTaken, [Date, Date]>>;
    checkEndStartPosition(start: Date, end: Date): Either<EndEarlierThanStart, [Date, Date]>;
    parseDateString(dateString: string): Either<DateNotValid, Date>;
}
