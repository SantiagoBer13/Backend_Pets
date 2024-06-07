import { Test, TestingModule } from '@nestjs/testing';
import { ManagerMedicalTreatmentsController } from './manager_medical_treatments.controller';
import { ManagerMedicalTreatmentsService } from './manager_medical_treatments.service';

describe('ManagerMedicalTreatmentsController', () => {
  let controller: ManagerMedicalTreatmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManagerMedicalTreatmentsController],
      providers: [ManagerMedicalTreatmentsService],
    }).compile();

    controller = module.get<ManagerMedicalTreatmentsController>(
      ManagerMedicalTreatmentsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
