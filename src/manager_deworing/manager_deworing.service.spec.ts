import { Test, TestingModule } from '@nestjs/testing';
import { ManagerDeworingService } from './manager_deworing.service';

describe('ManagerDeworingService', () => {
  let service: ManagerDeworingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerDeworingService],
    }).compile();

    service = module.get<ManagerDeworingService>(ManagerDeworingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
