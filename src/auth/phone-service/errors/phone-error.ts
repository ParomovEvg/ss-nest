export class PhoneError extends Error {
  errorType:string;
  constructor(message:string) {
    super();
    this.message = message;
    this.name = 'PhoneError';
    this.errorType = 'PhoneError';
  }
}