import { PartialType } from '@nestjs/swagger';
import { CreateManagerProfileDto } from './create-manager_profile.dto';

export class UpdateManagerProfileDto extends PartialType(
  CreateManagerProfileDto,
) {}
