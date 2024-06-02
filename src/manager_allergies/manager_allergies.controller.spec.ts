import { Test, TestingModule } from '@nestjs/testing';
import { ManagerAllergiesController } from './manager_allergies.controller';
import { ManagerAllergiesService } from './manager_allergies.service';

describe('ManagerAllergiesController', () => {
  let controller: ManagerAllergiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagerAllergiesController],
      providers: [ManagerAllergiesService],
    }).compile();

    controller = module.get<ManagerAllergiesController>(ManagerAllergiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
