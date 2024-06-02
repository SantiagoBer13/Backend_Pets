import { Module } from '@nestjs/common';
import { ManagerPetsService } from './manager_pets.service';
import { ManagerPetsController } from './manager_pets.controller';

@Module({
  controllers: [ManagerPetsController],
  providers: [ManagerPetsService],
})
export class ManagerPetsModule {}
