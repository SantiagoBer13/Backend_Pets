import { Test, TestingModule } from '@nestjs/testing';
import { ManagerStatisticsService } from './manager-statistics.service';

describe('ManagerStatisticsService', () => {
  let service: ManagerStatisticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerStatisticsService],
    }).compile();

    service = module.get<ManagerStatisticsService>(ManagerStatisticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
