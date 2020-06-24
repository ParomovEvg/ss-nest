import { JwtRequest } from './jwt-request';
import { PhoneService } from './phone/phone.service';
import { AuthService } from './auth.service';
import { CreatePhoneDto, CreatePhoneResDto, FlatPhoneDto, GetAllPhoneResDto, GetPhoneDto } from './phone/phone.dto';
import { CreatePasswordResDto } from './password/password.dto';
import { LoginDto, LoginResDto } from './auth.dto';
export declare class AuthController {
    private phoneService;
    private authService;
    constructor(phoneService: PhoneService, authService: AuthService);
    login(req: any, loginDto: LoginDto): Promise<LoginResDto>;
    getProfile(req: any): FlatPhoneDto;
    createUser(phoneDto: CreatePhoneDto): Promise<CreatePhoneResDto>;
    getSearchPhone(phone: GetPhoneDto): Promise<GetAllPhoneResDto>;
    getAllPhone(): Promise<GetAllPhoneResDto>;
    addPassword(req: JwtRequest): Promise<CreatePasswordResDto>;
}
