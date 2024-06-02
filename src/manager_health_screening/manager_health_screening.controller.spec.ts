import { Test, TestingModule } from '@nestjs/testing';
import { ManagerHealthScreeningController } from './manager_health_screening.controller';
import { ManagerHealthScreeningService } from './manager_health_screening.service';

describe('ManagerHealthScreeningController', () => {
  let controller: ManagerHealthScreeningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagerHealthScreeningController],
      providers: [ManagerHealthScreeningService],
    }).compile();

    controller = module.get<ManagerHealthScreeningController>(ManagerHealthScreeningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
