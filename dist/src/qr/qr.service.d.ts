import { Qr } from './qr.entity';
import { Repository } from 'typeorm';
import { Phone } from '../auth/phone/phone.entity';
import { Checkout } from './checkout/checkout.entity';
import { Draw } from './draw/draw.entity';
import { CreateQrDto, FlatQrDto } from './qr.dto';
import { CheckoutService } from './checkout/checkout.service';
import { Either } from 'useful-monads';
import { QrAlreadyExists, QrRegistrationLimitExceeded, QrSalaryNotEnough } from './qr.errors.dto';
import { DrawService } from './draw/draw.service';
import { NotDrawNow } from './draw/draw.errors.dto';
import { CheckoutNotFoundByFn } from './checkout/checkout.errors.dto';
export declare class QrService {
    private qrRepository;
    private checkoutService;
    private drawService;
    constructor(qrRepository: Repository<Qr>, checkoutService: CheckoutService, drawService: DrawService);
    findAllBy(where: {
        phone?: Phone;
        draw?: Draw;
        checkout?: Checkout;
    }): Promise<Qr[]>;
    createQr(createQrDto: CreateQrDto, phone: Phone): Promise<Either<QrAlreadyExists | NotDrawNow | QrSalaryNotEnough | QrRegistrationLimitExceeded | CheckoutNotFoundByFn, FlatQrDto>>;
    checkQrRegistrationLimit(draw: Draw, phone: Phone): Promise<Either<QrRegistrationLimitExceeded, Draw>>;
    checkSalary(draw: Draw, s: number): Promise<Either<QrSalaryNotEnough, Draw>>;
    checkQr(fp: string, fd: string): Promise<Either<QrAlreadyExists, true>>;
}
