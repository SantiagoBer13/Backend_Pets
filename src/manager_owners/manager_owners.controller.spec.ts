import { Test, TestingModule } from '@nestjs/testing';
import { ManagerOwnersController } from './manager_owners.controller';
import { ManagerOwnersService } from './manager_owners.service';

describe('ManagerOwnersController', () => {
  let controller: ManagerOwnersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagerOwnersController],
      providers: [ManagerOwnersService],
    }).compile();

    controller = module.get<ManagerOwnersController>(ManagerOwnersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
