import { PartialType } from '@nestjs/mapped-types';
import { CreateManagerVaccineDto } from './create-manager_vaccine.dto';

export class UpdateManagerVaccineDto extends PartialType(
  CreateManagerVaccineDto,
) {}
