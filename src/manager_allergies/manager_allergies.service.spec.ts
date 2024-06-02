import { Test, TestingModule } from '@nestjs/testing';
import { ManagerAllergiesService } from './manager_allergies.service';

describe('ManagerAllergiesService', () => {
  let service: ManagerAllergiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerAllergiesService],
    }).compile();

    service = module.get<ManagerAllergiesService>(ManagerAllergiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
