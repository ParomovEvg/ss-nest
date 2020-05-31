import { Connection, Repository } from 'typeorm';
import { PasswordService } from '../password/password.service';
import { Phone } from './phone.entity';
import { Password } from '../password/password.entity';
import { PhoneAlreadyExists, PhoneNotFound } from './phone.errors.dto';
import { CreatePhoneDto } from './phone.dto';
import { Either } from 'useful-monads';
export declare class PhoneService {
    private phoneRepository;
    private passwordService;
    private connection;
    constructor(phoneRepository: Repository<Phone>, passwordService: PasswordService, connection: Connection);
    createPhone(createPhoneDto: CreatePhoneDto): Promise<Either<PhoneAlreadyExists, Phone>>;
    addPassword(phoneObj: Phone, password: string): Promise<Either<PhoneNotFound, Password>>;
    findPhone(phone: string | Phone | CreatePhoneDto): Promise<Either<PhoneNotFound, Phone>>;
    private phoneNotExists;
    private extractPhoneNumber;
}
