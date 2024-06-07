import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { ManagerProfilesService } from './manager_profiles.service';
import { CreateManagerProfileDto } from './dto/create-manager_profile.dto';

@Controller('manager-profiles')
export class ManagerProfilesController {
  constructor(
    private readonly managerProfilesService: ManagerProfilesService,
  ) {}

  @Post()
  login(@Body() Body: CreateManagerProfileDto) {
    return this.managerProfilesService.login(Body);
  }

}
