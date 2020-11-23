import { Test, TestingModule } from '@nestjs/testing';
import { GameProductsController } from './game-products.controller';

describe('GameProductsController', () => {
  let controller: GameProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameProductsController],
    }).compile();

    controller = module.get<GameProductsController>(GameProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
