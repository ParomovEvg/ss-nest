export class QrError extends Error {
  constructor(message:string) {
    super();
    this.message = message;
    this.name = "QrError"
  }

}