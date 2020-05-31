import { JwtRequest } from '../auth/jwt-request';
import { CreateQrDto, CreateQrResDto } from './qr.dto';
import { QrService } from './qr.service';
export declare class QrController {
    private qrService;
    constructor(qrService: QrService);
    addQr(createQrDto: CreateQrDto, req: JwtRequest): Promise<CreateQrResDto>;
}
