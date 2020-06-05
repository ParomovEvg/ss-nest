import { Connection, Repository } from 'typeorm';
import { PasswordService } from '../password/password.service';
import { Phone } from './phone.entity';
import { Password } from '../password/password.entity';
import { PhoneNotFound } from './phone.errors.dto';
import { CreatePhoneDto } from './phone.dto';
import { Either } from 'useful-monads';
import { SendPasswordMailService } from '../../send-password/send-password-mail/send-password-mail.service';
export declare class PhoneService {
    private phoneRepository;
    private passwordService;
    private connection;
    private sendPasswordMailService;
    constructor(phoneRepository: Repository<Phone>, passwordService: PasswordService, connection: Connection, sendPasswordMailService: SendPasswordMailService);
    createPhone(createPhoneDto: CreatePhoneDto): Promise<Phone>;
    addPassword(phoneObj: Phone): Promise<Either<PhoneNotFound, Password>>;
    findPhone(phone: string | Phone | CreatePhoneDto): Promise<Either<PhoneNotFound, Phone>>;
    private phoneNotExists;
    private extractPhoneNumber;
}
