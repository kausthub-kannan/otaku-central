import { Test, TestingModule } from '@nestjs/testing';
import { MerchController } from './merch.controller';
import { MerchService } from './merch.service';

describe('MerchController', () => {
  let controller: MerchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerchController],
      providers: [MerchService],
    }).compile();

    controller = module.get<MerchController>(MerchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
