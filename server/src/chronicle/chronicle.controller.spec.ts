import { Test, TestingModule } from '@nestjs/testing';
import { ChronicleController } from './chronicle.controller';
import { ChronicleService } from './chronicle.service';

describe('ChronicleController', () => {
  let controller: ChronicleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChronicleController],
      providers: [ChronicleService],
    }).compile();

    controller = module.get<ChronicleController>(ChronicleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
