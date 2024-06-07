import { Test, TestingModule } from '@nestjs/testing';
import { ManagerSurgeriesController } from './manager_surgeries.controller';
import { ManagerSurgeriesService } from './manager_surgeries.service';

describe('ManagerSurgeriesController', () => {
  let controller: ManagerSurgeriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagerSurgeriesController],
      providers: [ManagerSurgeriesService],
    }).compile();

    controller = module.get<ManagerSurgeriesController>(
      ManagerSurgeriesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
