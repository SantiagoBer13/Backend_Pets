import { Module } from '@nestjs/common';
import { ManagerSurgeriesService } from './manager_surgeries.service';
import { ManagerSurgeriesController } from './manager_surgeries.controller';

@Module({
  controllers: [ManagerSurgeriesController],
  providers: [ManagerSurgeriesService],
})
export class ManagerSurgeriesModule {}
