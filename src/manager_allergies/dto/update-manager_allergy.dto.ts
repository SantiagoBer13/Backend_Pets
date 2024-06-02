import { PartialType } from '@nestjs/swagger';
import { CreateManagerAllergyDto } from './create-manager_allergy.dto';

export class UpdateManagerAllergyDto extends PartialType(CreateManagerAllergyDto) {}
