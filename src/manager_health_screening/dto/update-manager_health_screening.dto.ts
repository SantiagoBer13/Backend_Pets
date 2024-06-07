import { PartialType } from '@nestjs/swagger';
import { CreateManagerHealthScreeningDto } from './create-manager_health_screening.dto';

export class UpdateManagerHealthScreeningDto extends PartialType(
  CreateManagerHealthScreeningDto,
) {}
