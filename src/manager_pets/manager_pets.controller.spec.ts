import { Test, TestingModule } from '@nestjs/testing';
import { ManagerPetsController } from './manager_pets.controller';
import { ManagerPetsService } from './manager_pets.service';

describe('ManagerPetsController', () => {
  let controller: ManagerPetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagerPetsController],
      providers: [ManagerPetsService],
    }).compile();

    controller = module.get<ManagerPetsController>(ManagerPetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
