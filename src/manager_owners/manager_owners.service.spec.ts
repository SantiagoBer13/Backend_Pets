import { Test, TestingModule } from '@nestjs/testing';
import { ManagerOwnersService } from './manager_owners.service';

describe('ManagerOwnersService', () => {
  let service: ManagerOwnersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerOwnersService],
    }).compile();

    service = module.get<ManagerOwnersService>(ManagerOwnersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
