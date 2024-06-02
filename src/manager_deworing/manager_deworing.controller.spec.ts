import { Test, TestingModule } from '@nestjs/testing';
import { ManagerDeworingController } from './manager_deworing.controller';
import { ManagerDeworingService } from './manager_deworing.service';

describe('ManagerDeworingController', () => {
  let controller: ManagerDeworingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagerDeworingController],
      providers: [ManagerDeworingService],
    }).compile();

    controller = module.get<ManagerDeworingController>(ManagerDeworingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
