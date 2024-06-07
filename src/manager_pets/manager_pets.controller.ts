import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ManagerPetsService } from './manager_pets.service';
import { CreateManagerPetDto } from './dto/create-manager_pet.dto';
import { UpdateManagerPetDto } from './dto/update-manager_pet.dto';

@Controller('manager-pets')
export class ManagerPetsController {
  constructor(private readonly managerPetsService: ManagerPetsService) {}

  @Post()
  create(@Body() createManagerPetDto: CreateManagerPetDto) {
    return this.managerPetsService.create(createManagerPetDto);
  }

  @Get()
  findAll() {
    return this.managerPetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managerPetsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateManagerPetDto: UpdateManagerPetDto,
  ) {
    return this.managerPetsService.update(+id, updateManagerPetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managerPetsService.remove(+id);
  }
}
