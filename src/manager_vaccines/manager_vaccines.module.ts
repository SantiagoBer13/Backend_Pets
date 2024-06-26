import { Module } from '@nestjs/common';
import { ManagerVaccinesService } from './manager_vaccines.service';
import { ManagerVaccinesController } from './manager_vaccines.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ManagerVaccinesController],
  providers: [ManagerVaccinesService, PrismaService],
})
export class ManagerVaccinesModule {}
