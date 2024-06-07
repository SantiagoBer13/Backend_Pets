import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ManagerMedicalTreatmentsService } from './manager_medical_treatments.service';
import { CreateManagerMedicalTreatmentDto } from './dto/create-manager_medical_treatment.dto';
import { UpdateManagerMedicalTreatmentDto } from './dto/update-manager_medical_treatment.dto';

@Controller('manager-medical-treatments')
export class ManagerMedicalTreatmentsController {
  constructor(
    private readonly managerMedicalTreatmentsService: ManagerMedicalTreatmentsService,
  ) {}

  @Post()
  create(
    @Body() createManagerMedicalTreatmentDto: CreateManagerMedicalTreatmentDto,
  ) {
    return this.managerMedicalTreatmentsService.create(
      createManagerMedicalTreatmentDto,
    );
  }

  @Get()
  findAll() {
    return this.managerMedicalTreatmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managerMedicalTreatmentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateManagerMedicalTreatmentDto: UpdateManagerMedicalTreatmentDto,
  ) {
    return this.managerMedicalTreatmentsService.update(
      +id,
      updateManagerMedicalTreatmentDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managerMedicalTreatmentsService.remove(+id);
  }
}
