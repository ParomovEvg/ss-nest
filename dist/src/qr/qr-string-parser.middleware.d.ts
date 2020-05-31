import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class QrStringParserMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void): void;
    private parseQrString;
}
