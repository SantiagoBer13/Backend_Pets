import { Module } from '@nestjs/common';
import { ManagerPetsService } from './manager_pets.service';
import { ManagerPetsController } from './manager_pets.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ManagerPetsController],
  providers: [ManagerPetsService, PrismaService],
})
export class ManagerPetsModule {}
