export class PasswordError extends Error {
  errorType:string;
  constructor(message:string) {
    super();
    this.message = message;
    this.name = 'PasswordError';
    this.errorType = 'PasswordError';
  }
}