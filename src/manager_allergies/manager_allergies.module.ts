import { Module } from '@nestjs/common';
import { ManagerAllergiesService } from './manager_allergies.service';
import { ManagerAllergiesController } from './manager_allergies.controller';

@Module({
  controllers: [ManagerAllergiesController],
  providers: [ManagerAllergiesService],
})
export class ManagerAllergiesModule {}
