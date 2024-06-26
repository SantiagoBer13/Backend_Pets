import { Test, TestingModule } from '@nestjs/testing';
import { ManagerVeterinariansController } from './manager_veterinarians.controller';
import { ManagerVeterinariansService } from './manager_veterinarians.service';

describe('ManagerVeterinariansController', () => {
  let controller: ManagerVeterinariansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagerVeterinariansController],
      providers: [ManagerVeterinariansService],
    }).compile();

    controller = module.get<ManagerVeterinariansController>(ManagerVeterinariansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
