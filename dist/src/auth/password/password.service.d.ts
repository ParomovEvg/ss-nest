import { Repository } from 'typeorm';
import { Password } from './password.entity';
import { Phone } from '../phone/phone.entity';
import { CreatePhoneDto } from '../phone/phone.dto';
import { PasswordsOfPhoneNotFound } from './password.errors.dto';
import { Either } from 'useful-monads';
export declare class PasswordService {
    private passwordRepository;
    private saltRounds;
    constructor(passwordRepository: Repository<Password>);
    createPassword(passwordSrc: string | CreatePhoneDto, phone: Phone): Promise<Password>;
    createAndSavePassword(passwordString: string, phone: Phone): Promise<Password>;
    checkPhonePassword(phone: Phone, password: string | CreatePhoneDto | Password): Promise<Either<PasswordsOfPhoneNotFound, Phone | null>>;
    private checkPassword;
    private extractPassword;
}
