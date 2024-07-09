import { Module } from '@nestjs/common';
import { ManagerStatisticsService } from './manager-statistics.service';
import { ManagerStatisticsController } from './manager-statistics.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ManagerStatisticsController],
  providers: [ManagerStatisticsService, PrismaService],
})
export class ManagerStatisticsModule {}
