import { Test, TestingModule } from '@nestjs/testing';
import { ManagerVaccinesController } from './manager_vaccines.controller';
import { ManagerVaccinesService } from './manager_vaccines.service';

describe('ManagerVaccinesController', () => {
  let controller: ManagerVaccinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagerVaccinesController],
      providers: [ManagerVaccinesService],
    }).compile();

    controller = module.get<ManagerVaccinesController>(ManagerVaccinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
