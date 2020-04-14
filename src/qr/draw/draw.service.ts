import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Draw } from './draw.entity';
import { Repository } from 'typeorm';
import { right, Either, left } from '@sweet-monads/either';
import {
  createDrawNotFoundById,
  createNotDrawNow,
  DateNotValid,
  DatesAreTaken,
  DrawNotFoundById,
  EndEarlierThanStart,
  NotDrawNow,
} from './draw.errors.dto';
import { DateService } from '../date/date.service';

@Injectable()
export class DrawService {
  constructor(
    @InjectRepository(Draw)
    private drawRepository: Repository<Draw>,
    private dateService: DateService,
  ) {}

  findAllDraw(): Promise<Draw[]> {
    return this.drawRepository.find();
  }

  async findNowDraw(): Promise<Either<NotDrawNow, Draw>> {
    const draws = await this.findAllDraw();
    const draw = draws.find(draw => {
      console.log(draw)
      const start = Date.parse(draw.start)
      const end = Date.parse(draw.end)
      const now = Date.now();
      console.log(start, end, now)
      return start < now && end > now;
    });
    if (draw) {
      return right(draw);
    } else {
      return left(createNotDrawNow({ now: new Date().toISOString() }));
    }
  }

  createDraw(
    startString: string,
    endString: string,
    description: string,
  ): Promise<Either<DatesAreTaken | EndEarlierThanStart | DateNotValid, Draw>> {
    return this.dateService
      .parseDateString(startString)
      .chain(start =>
        this.dateService.parseDateString(endString).map(end => [start, end]),
      )
      .chain(([start, end]) =>
        this.dateService.checkEndStartPosition(start, end),
      )
      .asyncChain(async ([start, end]) =>
        this.dateService.checkDateRangeAreFree(
          await this.findAllDraw(),
          start,
          end,
        ),
      )
      .then(valE =>
        valE
          .map(([start, end]) => {
            const draw = this.drawRepository.create();
            draw.start = start.toISOString();
            draw.end = end.toISOString();
            draw.description = description;
            return draw;
          })
          .asyncMap(draw => this.drawRepository.save(draw)),
      );
  }

  async createNextDraw(end: string, description: string) {
    const draws = await this.findAllDraw();
    let startNum = draws.reduce<number>((lastNum, nextDraw) => {
      const nextNum = Date.parse(nextDraw.end)
      if (nextNum > lastNum) {
        return nextNum;
      }
      return lastNum;
    }, 0);

    if (startNum === 0) {
      startNum = new Date().getMilliseconds();
    }
    return this.createDraw(new Date(startNum).toISOString(), end, description);
  }

  async deleteDraw(id: number): Promise<Either<DrawNotFoundById, {id:number}>> {
    const res = await this.drawRepository.delete({ id: id });
    if (res.affected) {
      return right({id});
    } else {
      return left(createDrawNotFoundById({ id }));
    }
  }
}
