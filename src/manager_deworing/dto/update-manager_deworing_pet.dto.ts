import { PartialType } from '@nestjs/mapped-types';
import { CreateManagerDeworingPetDto } from './create-manager_deworing_pet.dto';

export class UpdateManagerDeworingPetDto extends PartialType(
  CreateManagerDeworingPetDto,
) {}