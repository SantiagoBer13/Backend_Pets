import { Module } from '@nestjs/common';
import { ManagerDeworingService } from './manager_deworing.service';
import { ManagerDeworingController } from './manager_deworing.controller';

@Module({
  controllers: [ManagerDeworingController],
  providers: [ManagerDeworingService],
})
export class ManagerDeworingModule {}
