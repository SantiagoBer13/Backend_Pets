import { Test, TestingModule } from '@nestjs/testing';
import { ManagerProfilesService } from './manager_profiles.service';

describe('ManagerProfilesService', () => {
  let service: ManagerProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerProfilesService],
    }).compile();

    service = module.get<ManagerProfilesService>(ManagerProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
