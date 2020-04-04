import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { parse } from 'url';


@Injectable()
export class QrStringParserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    if (!req.body.qrString) {
      return next();
    }
    const lastBody = req.body;
    let newBody;
    try {
      newBody = {
        ...lastBody,
        ...this.parseQrString(req.body.qrString),
      };
    } catch (e) {
      newBody = lastBody;
    }
    delete newBody.qrString;
    req.body = newBody;
    next();
  }

  private parseQrString(qrString: string): object {
    const url = parse(qrString,true);
    return url.query
  }
}
