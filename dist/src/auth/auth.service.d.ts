import { PhoneService } from './phone/phone.service';
import { PasswordService } from './password/password.service';
import { JwtService } from '@nestjs/jwt';
import { Phone } from './phone/phone.entity';
import { LoginDto } from './auth.dto';
export declare class AuthService {
    private phoneService;
    private passwordService;
    private jwtService;
    constructor(phoneService: PhoneService, passwordService: PasswordService, jwtService: JwtService);
    validate(loginDto: LoginDto): Promise<import("useful-monads").Either<import("./phone/phone.errors.dto").PhoneNotFound | import("./password/password.errors.dto").PasswordsOfPhoneNotFound, Phone, undefined>>;
    login(phone: Phone): Promise<{
        access_token: string;
    }>;
}