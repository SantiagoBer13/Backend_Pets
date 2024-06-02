import { Test, TestingModule } from '@nestjs/testing';
import { ManagerSurgeriesService } from './manager_surgeries.service';

describe('ManagerSurgeriesService', () => {
  let service: ManagerSurgeriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerSurgeriesService],
    }).compile();

    service = module.get<ManagerSurgeriesService>(ManagerSurgeriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
