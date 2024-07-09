import { Test, TestingModule } from '@nestjs/testing';
import { ManagerStatisticsController } from './manager-statistics.controller';
import { ManagerStatisticsService } from './manager-statistics.service';

describe('ManagerStatisticsController', () => {
  let controller: ManagerStatisticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagerStatisticsController],
      providers: [ManagerStatisticsService],
    }).compile();

    controller = module.get<ManagerStatisticsController>(ManagerStatisticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
