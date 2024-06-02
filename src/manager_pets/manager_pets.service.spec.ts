import { Test, TestingModule } from '@nestjs/testing';
import { ManagerPetsService } from './manager_pets.service';

describe('ManagerPetsService', () => {
  let service: ManagerPetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerPetsService],
    }).compile();

    service = module.get<ManagerPetsService>(ManagerPetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
