import { JwtRequest } from '../auth/jwt-request';
import { CreateQrDto, CreateQrResDto, GetQrNumResDto, FilterQrResDto, FilterQrDto, GetAllQrResDto } from './qr.dto';
import { QrService } from './qr.service';
export declare class QrController {
    private qrService;
    constructor(qrService: QrService);
    addQr(createQrDto: CreateQrDto, req: JwtRequest): Promise<CreateQrResDto>;
    getAllQr(): Promise<GetAllQrResDto>;
    countQr(req: JwtRequest): Promise<GetQrNumResDto>;
    filterQr(filterQr: FilterQrDto): Promise<FilterQrResDto>;
}
