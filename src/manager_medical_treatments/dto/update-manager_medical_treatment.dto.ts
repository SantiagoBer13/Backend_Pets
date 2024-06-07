import { PartialType } from '@nestjs/swagger';
import { CreateManagerMedicalTreatmentDto } from './create-manager_medical_treatment.dto';

export class UpdateManagerMedicalTreatmentDto extends PartialType(
  CreateManagerMedicalTreatmentDto,
) {}
