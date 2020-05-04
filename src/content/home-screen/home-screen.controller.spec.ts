import { Test, TestingModule } from '@nestjs/testing';
import { HomeScreenController } from './home-screen.controller';

describe('HomeScreen Controller', () => {
  let controller: HomeScreenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeScreenController],
    }).compile();

    controller = module.get<HomeScreenController>(HomeScreenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
