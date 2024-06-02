import { Test, TestingModule } from '@nestjs/testing';
import { ManagerMedicalTreatmentsService } from './manager_medical_treatments.service';

describe('ManagerMedicalTreatmentsService', () => {
  let service: ManagerMedicalTreatmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManagerMedicalTreatmentsService],
    }).compile();

    service = module.get<ManagerMedicalTreatmentsService>(ManagerMedicalTreatmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
