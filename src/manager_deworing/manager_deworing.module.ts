import { Module } from '@nestjs/common';
import { ManagerDeworingService } from './manager_deworing.service';
import { ManagerDeworingController } from './manager_deworing.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthGuardUser } from 'src/auth/auth_user.guard';
import { AuthGuardVeterinarian } from 'src/auth/auth_veterinarian.guard';

@Module({
  controllers: [ManagerDeworingController],
  providers: [ManagerDeworingService, PrismaService, JwtService, AuthGuardUser, AuthGuardVeterinarian],
})
export class ManagerDeworingModule {}
