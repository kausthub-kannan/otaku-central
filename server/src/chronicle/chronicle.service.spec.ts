import { Test, TestingModule } from '@nestjs/testing';
import { ChronicleService } from './chronicle.service';

describe('ChronicleService', () => {
  let service: ChronicleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChronicleService],
    }).compile();

    service = module.get<ChronicleService>(ChronicleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
