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
import { ManagerDeworingService } from './manager_deworing.service';
import { CreateManagerDeworingDto } from './dto/create-manager_deworing.dto';
import { UpdateManagerDeworingDto } from './dto/update-manager_deworing.dto';
import { CreateManagerDeworingPetDto } from './dto/create-manager_deworing_pet.dto';
import { UpdateManagerDeworingPetDto } from './dto/update-manager_deworing_pet.dto';

@Controller('manager-deworing')
export class ManagerDeworingController {
  constructor(
    private readonly managerDeworingService: ManagerDeworingService,
  ) {}

  @Post()
  create(@Body() body: CreateManagerDeworingDto) {
    return this.managerDeworingService.create(body);
  }

  @Get()
  findAll() {
    return this.managerDeworingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.managerDeworingService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateManagerDeworingDto,
  ) {
    return this.managerDeworingService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.managerDeworingService.remove(+id);
  }

  // Métodos para desparacitaciones
  @Post('pets')
  createDeworingPet(@Body() body: CreateManagerDeworingPetDto) {
    return this.managerDeworingService.createDeworingPet(body);
  }

  @Get('pets/:id')
  findAllDeworingPet(@Param('id', ParseIntPipe) id: number) {
    return this.managerDeworingService.findAllDeworingPet(id);
  }

  @Get('pets/single/:id')
  findOneDeworingPet(@Param('id', ParseIntPipe) id: number) {
    return this.managerDeworingService.findOneDeworingPet(+id);
  }

  @Put('pets/:id')
  updateDeworingPet(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateManagerDeworingPetDto,
  ) {
    return this.managerDeworingService.updateDeworingPet(+id, body);
  }

  @Delete('pets/:id')
  removeDeworingPet(@Param('id', ParseIntPipe) id: number) {
    return this.managerDeworingService.removeDeworingPet(+id);
  }
}
