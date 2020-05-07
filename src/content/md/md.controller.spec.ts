import { Test, TestingModule } from '@nestjs/testing';
import { MdController } from './md.controller';

describe('Md Controller', () => {
  let controller: MdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MdController],
    }).compile();

    controller = module.get<MdController>(MdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
