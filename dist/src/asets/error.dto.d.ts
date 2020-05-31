export declare class ErrorDto {
    name: any;
    message: string;
    param: any;
}
export declare const createError: <T extends ErrorDto>(constructor: new () => T, name: T["name"], message: T["message"] | ((param: T["param"]) => T["message"])) => (param: T["param"]) => T;
