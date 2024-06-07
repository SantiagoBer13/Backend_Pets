import { Module } from '@nestjs/common';
import { ManagerProfilesService } from './manager_profiles.service';
import { ManagerProfilesController } from './manager_profiles.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_TO_USER,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [ManagerProfilesController],
  providers: [ManagerProfilesService, PrismaService],
})
export class ManagerProfilesModule {}