import { Module } from '@nestjs/common';
import { ManagerOwnersService } from './manager_owners.service';
import { ManagerOwnersController } from './manager_owners.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthGuardVeterinarian } from 'src/auth/auth_veterinarian.guard';
import { AuthGuardUser } from 'src/auth/auth_user.guard';

@Module({
  controllers: [ManagerOwnersController],
  providers: [ManagerOwnersService, PrismaService, JwtService, AuthGuardUser, AuthGuardVeterinarian],
})
export class ManagerOwnersModule {}
