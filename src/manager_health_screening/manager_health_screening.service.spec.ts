import { Test, TestingModule } from '@nestjs/testing';
import { ManagerHealthScreeningService } from './manager_health_screening.service';

describe('ManagerHealthScreeningService', () => {
  let service: ManagerHealthScreeningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerHealthScreeningService],
    }).compile();

    service = module.get<ManagerHealthScreeningService>(ManagerHealthScreeningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
