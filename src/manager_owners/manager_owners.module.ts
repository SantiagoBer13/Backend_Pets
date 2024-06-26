import { Module } from '@nestjs/common';
import { ManagerOwnersService } from './manager_owners.service';
import { ManagerOwnersController } from './manager_owners.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ManagerOwnersController],
  providers: [ManagerOwnersService, PrismaService],
})
export class ManagerOwnersModule {}
