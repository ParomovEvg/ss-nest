import { Repository } from 'typeorm';
import { Password } from './password.entity';
import { Phone } from '../phone/phone.entity';
import { PasswordsOfPhoneNotFound } from './password.errors.dto';
import { Either } from 'useful-monads';
import { LoginDto } from '../auth.dto';
import { SendPasswordMailService } from '../../send-password/send-password-mail/send-password-mail.service';
export declare class PasswordService {
    private passwordRepository;
    private sendPasswordMailService;
    private saltRounds;
    constructor(passwordRepository: Repository<Password>, sendPasswordMailService: SendPasswordMailService);
    createPassword(phone: Phone): Promise<Password>;
    createAndSavePassword(phone: Phone): Promise<Password>;
    checkPhonePassword(phone: Phone, password: string | LoginDto | Password): Promise<Either<PasswordsOfPhoneNotFound, Phone | null>>;
    private checkPassword;
    private extractPassword;
}
