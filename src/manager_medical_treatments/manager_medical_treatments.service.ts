import { Injectable } from '@nestjs/common';
import { CreateManagerMedicalTreatmentDto } from './dto/create-manager_medical_treatment.dto';
import { UpdateManagerMedicalTreatmentDto } from './dto/update-manager_medical_treatment.dto';

@Injectable()
export class ManagerMedicalTreatmentsService {
  create(createManagerMedicalTreatmentDto: CreateManagerMedicalTreatmentDto) {
    return 'This action adds a new managerMedicalTreatment';
  }

  findAll() {
    return `This action returns all managerMedicalTreatments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} managerMedicalTreatment`;
  }

  update(
    id: number,
    updateManagerMedicalTreatmentDto: UpdateManagerMedicalTreatmentDto,
  ) {
    return `This action updates a #${id} managerMedicalTreatment`;
  }

  remove(id: number) {
    return `This action removes a #${id} managerMedicalTreatment`;
  }
}
