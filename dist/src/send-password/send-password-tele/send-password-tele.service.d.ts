import { ConfigService } from '@nestjs/config';
import { SendPasswordInterface } from '../send-password.interface';
export declare class SendPasswordTeleService implements SendPasswordInterface {
    private configService;
    private bot;
    constructor(configService: ConfigService);
    sendPassword(phone: string, password: string): Promise<string>;
}
