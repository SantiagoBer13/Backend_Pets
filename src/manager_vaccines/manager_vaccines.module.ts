import { Module } from '@nestjs/common';
import { ManagerVaccinesService } from './manager_vaccines.service';
import { ManagerVaccinesController } from './manager_vaccines.controller';

@Module({
  controllers: [ManagerVaccinesController],
  providers: [ManagerVaccinesService],
})
export class ManagerVaccinesModule {}
