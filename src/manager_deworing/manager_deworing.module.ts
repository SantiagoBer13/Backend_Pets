import { Module } from '@nestjs/common';
import { ManagerDeworingService } from './manager_deworing.service';
import { ManagerDeworingController } from './manager_deworing.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ManagerDeworingController],
  providers: [ManagerDeworingService, PrismaService],
})
export class ManagerDeworingModule {}
