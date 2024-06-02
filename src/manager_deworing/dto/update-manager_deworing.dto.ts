import { PartialType } from '@nestjs/swagger';
import { CreateManagerDeworingDto } from './create-manager_deworing.dto';

export class UpdateManagerDeworingDto extends PartialType(CreateManagerDeworingDto) {}
