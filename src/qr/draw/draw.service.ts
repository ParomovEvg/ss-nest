import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Draw } from './draw.entity';
import { Connection, Repository } from 'typeorm';
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
import {
  ChangeDrawDto,
  CreateDrawDto,
  CreateDrawNextDto,
  FindFullDrawDto,
  FlatDrawDto,
  FullDrawDto,
} from './draw.dto';
import { Qr } from '../qr.entity';

@Injectable()
export class DrawService {
  constructor(
    @InjectRepository(Draw)
    private drawRepository: Repository<Draw>,
    private dateService: DateService,
    private connection: Connection,
  ) {}

  findAllDraw(): Promise<Draw[]> {
    return this.drawRepository.find();
  }

  async findNowDraw(): Promise<Either<NotDrawNow, Draw>> {
    const draws = await this.findAllDraw();
    const draw = draws.find(draw => {
      const start = +draw.start;
      const end = +draw.end;
      const now = Date.now();
      return start < now && end > now;
    });
    if (draw) {
      return right(draw);
    } else {
      return left(createNotDrawNow({ now: new Date().toISOString() }));
    }
  }

  async findDraw(
    findFullDrawDto: FindFullDrawDto,
  ): Promise<Either<DrawNotFoundById, Draw>> {
    const draw = await this.drawRepository.findOne({
      where: { id: findFullDrawDto.id },
      relations: ['drawQrs'],
    });
    if (draw) {
      return right(draw);
    } else {
      return left(createDrawNotFoundById({ id: findFullDrawDto.id }));
    }
  }

  createDraw(
    createDrawDto: CreateDrawDto,
  ): Promise<Either<DatesAreTaken | EndEarlierThanStart | DateNotValid, Draw>> {
    return this.dateService
      .parseDateString(createDrawDto.start)
      .chain(start =>
        this.dateService
          .parseDateString(createDrawDto.end)
          .map(end => [start, end]),
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
            draw.start = start;
            draw.end = end;
            draw.description = createDrawDto.description;
            draw.sLimit = createDrawDto.sLimit;
            draw.qrLimit = createDrawDto.qrLimit;
            draw.qrLimitPeriodMS = createDrawDto.qrLimitPeriodMS;
            return draw;
          })
          .asyncMap(draw => this.drawRepository.save(draw)),
      );
  }

  async createNextDraw(createDrawNextDto: CreateDrawNextDto) {
    const draws = await this.findAllDraw();
    let startNum = draws.reduce<number>((lastNum, nextDraw) => {
      const nextNum = +nextDraw.end;
      if (nextNum > lastNum) {
        return nextNum;
      }
      return lastNum;
    }, 0);

    if (startNum === 0) {
      startNum = Date.now();
    }
    const createDrawDto: CreateDrawDto = {
      ...createDrawNextDto,
      start: new Date(startNum).toISOString(),
    };
    return this.createDraw(createDrawDto);
  }

  async deleteDraw(
    id: number,
  ): Promise<Either<DrawNotFoundById, { id: number }>> {
    return this.findDraw({ id: id }).then(r =>
      r.asyncMap(async draw => {
        await this.connection.transaction(async tm => {
          await tm
            .createQueryBuilder()
            .delete()
            .from(Qr, 'qr')
            .where('qr.id IN (:...ids)', { ids: draw.drawQrs.map(qr => qr.id) })
            .execute();
          await tm
            .createQueryBuilder()
            .delete()
            .from(Draw, 'draw')
            .where('draw.id = :id', { id: draw.id })
            .execute();
        });
        return { id };
      }),
    );
  }

  async changeDraw(
    changeDrawDto: ChangeDrawDto,
    id: number,
  ): Promise<Either<DrawNotFoundById, Draw>> {
    const draw = await this.drawRepository.findOne({ where: { id: id } });
    if (draw) {
      draw.sLimit = changeDrawDto.sLimit;
      draw.qrLimit = changeDrawDto.qrLimit;
      draw.qrLimitPeriodMS = changeDrawDto.qrLimitPeriodMS;
      return right(await this.drawRepository.save(draw));
    } else {
      return left(createDrawNotFoundById({ id }));
    }
  }

  mapDrawToFlatDraw(d: Draw): FlatDrawDto {
    return {
      ...d,
      end: d.end.toISOString(),
      start: d.start.toISOString(),
    };
  }
  mapDrawToFullDraw(d: Draw): FullDrawDto {
    return {
      ...d,
      end: d.end.toISOString(),
      start: d.start.toISOString(),
      drawQrs: d.drawQrs.map(qr => ({
        ...qr,
        time: qr.time.toISOString(),
      })),
    };
  }
}
