import { Module } from '@nestjs/common';
import { ManagerVaccinesService } from './manager_vaccines.service';
import { ManagerVaccinesController } from './manager_vaccines.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthGuardUser } from 'src/auth/auth_user.guard';
import { AuthGuardVeterinarian } from 'src/auth/auth_veterinarian.guard';

@Module({
  controllers: [ManagerVaccinesController],
  providers: [ManagerVaccinesService, PrismaService, JwtService, AuthGuardUser, AuthGuardVeterinarian],
})
export class ManagerVaccinesModule {}
