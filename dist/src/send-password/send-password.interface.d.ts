export interface SendPasswordInterface {
    sendPassword: (phone: string, password: string) => Promise<string>;
}
