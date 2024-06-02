import { Module } from '@nestjs/common';
import { ManagerHealthScreeningService } from './manager_health_screening.service';
import { ManagerHealthScreeningController } from './manager_health_screening.controller';

@Module({
  controllers: [ManagerHealthScreeningController],
  providers: [ManagerHealthScreeningService],
})
export class ManagerHealthScreeningModule {}
