import { SendPasswordInterface } from '../send-password.interface';
export declare class SendPasswordMailService implements SendPasswordInterface {
    private mail;
    constructor();
    sendPassword(phone: string, password: string): Promise<string>;
}
