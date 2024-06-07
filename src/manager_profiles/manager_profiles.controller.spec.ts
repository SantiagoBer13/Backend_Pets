import { Test, TestingModule } from '@nestjs/testing';
import { ManagerProfilesController } from './manager_profiles.controller';
import { ManagerProfilesService } from './manager_profiles.service';

describe('ManagerProfilesController', () => {
  let controller: ManagerProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagerProfilesController],
      providers: [ManagerProfilesService],
    }).compile();

    controller = module.get<ManagerProfilesController>(
      ManagerProfilesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
