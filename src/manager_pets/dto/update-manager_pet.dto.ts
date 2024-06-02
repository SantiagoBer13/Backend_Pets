import { PartialType } from '@nestjs/swagger';
import { CreateManagerPetDto } from './create-manager_pet.dto';

export class UpdateManagerPetDto extends PartialType(CreateManagerPetDto) {}
