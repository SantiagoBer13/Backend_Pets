import { Test, TestingModule } from '@nestjs/testing';
import { ManagerVaccinesService } from './manager_vaccines.service';

describe('ManagerVaccinesService', () => {
  let service: ManagerVaccinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerVaccinesService],
    }).compile();

    service = module.get<ManagerVaccinesService>(ManagerVaccinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
