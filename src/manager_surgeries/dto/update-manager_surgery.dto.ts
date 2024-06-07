import { PartialType } from '@nestjs/mapped-types';
import { CreateManagerSurgeryDto } from './create-manager_surgery.dto';

export class UpdateManagerSurgeryDto extends PartialType(
  CreateManagerSurgeryDto,
) {}
