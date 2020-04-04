import { QrStringParserMiddleware } from './qr-string-parser.middleware';

describe('QrStringParserMiddleware', () => {
  it('should be defined', () => {
    expect(new QrStringParserMiddleware()).toBeDefined();
  });
});
