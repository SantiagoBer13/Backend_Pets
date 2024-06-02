import { Module } from '@nestjs/common';
import { ManagerMedicalTreatmentsService } from './manager_medical_treatments.service';
import { ManagerMedicalTreatmentsController } from './manager_medical_treatments.controller';

@Module({
  controllers: [ManagerMedicalTreatmentsController],
  providers: [ManagerMedicalTreatmentsService],
})
export class ManagerMedicalTreatmentsModule {}
