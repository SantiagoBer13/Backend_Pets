import { Module } from '@nestjs/common';
import { ManagerPetsService } from './manager_pets.service';
import { ManagerPetsController } from './manager_pets.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthGuardUser } from 'src/auth/auth_user.guard';
import { AuthGuardVeterinarian } from 'src/auth/auth_veterinarian.guard';

@Module({
  controllers: [ManagerPetsController],
  providers: [ManagerPetsService, PrismaService, JwtService, AuthGuardUser, AuthGuardVeterinarian],
})
export class ManagerPetsModule {}
