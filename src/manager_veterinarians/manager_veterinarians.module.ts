import { Module } from '@nestjs/common';
import { ManagerVeterinariansService } from './manager_veterinarians.service';
import { ManagerVeterinariansController } from './manager_veterinarians.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ManagerVeterinariansController],
  providers: [ManagerVeterinariansService, PrismaService],
})
export class ManagerVeterinariansModule {}