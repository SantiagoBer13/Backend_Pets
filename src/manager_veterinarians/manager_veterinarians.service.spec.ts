import { Test, TestingModule } from '@nestjs/testing';
import { ManagerVeterinariansService } from './manager_veterinarians.service';

describe('ManagerVeterinariansService', () => {
  let service: ManagerVeterinariansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerVeterinariansService],
    }).compile();

    service = module.get<ManagerVeterinariansService>(ManagerVeterinariansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
