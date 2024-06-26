import { PartialType } from '@nestjs/mapped-types';
import { CreateManagerVaccinePetDto } from './create-manager_vaccine_pet.dto';

export class UpdateManagerVaccinePetDto extends PartialType(
  CreateManagerVaccinePetDto,
) {}