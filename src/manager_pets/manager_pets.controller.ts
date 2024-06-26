import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ManagerPetsService } from './manager_pets.service';
import { CreateManagerPetDto } from './dto/create-manager_pet.dto';
import { UpdateManagerPetDto } from './dto/update-manager_pet.dto';

@Controller('manager-pets')
export class ManagerPetsController {
  constructor(private readonly managerPetsService: ManagerPetsService) {}
 
  @Post()
  create(@Body() body: CreateManagerPetDto) {
    return this.managerPetsService.create(body);
  }

  @Get()
  findAll() {
    return this.managerPetsService.findAll();
  }

  @Get('with-owner')
  findAllWithOwner() {
    return this.managerPetsService.findAllWithOwner();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.managerPetsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateManagerPetDto,
  ) {
    return this.managerPetsService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.managerPetsService.remove(+id);
  }
}
