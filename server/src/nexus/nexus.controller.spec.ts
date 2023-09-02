import { Test, TestingModule } from '@nestjs/testing';
import { NexusController } from './nexus.controller';
import { NexusService } from './nexus.service';

describe('NexusController', () => {
  let controller: NexusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NexusController],
      providers: [NexusService],
    }).compile();

    controller = module.get<NexusController>(NexusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
