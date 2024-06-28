import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { ManagerVeterinariansService } from './manager_veterinarians.service';
import { CreateManagerVeterinarianDto } from './dto/create-manager_veterinarian.dto';
import { UpdateManagerVeterinarianDto } from './dto/update-manager_veterinarian.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('manager-veterinarians')
@Controller('manager-veterinarians')
export class ManagerVeterinariansController {
  constructor(private readonly managerVeterinariansService: ManagerVeterinariansService) {}

  @Post()
  create(@Body() body: CreateManagerVeterinarianDto) {
    return this.managerVeterinariansService.create(body);
  }

  @Get()
  findAll() {
    return this.managerVeterinariansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.managerVeterinariansService.findOne(+id);
  }

  @Put(':id')
  update( @Param('id', ParseIntPipe) id: number, @Body() body: UpdateManagerVeterinarianDto) {
    return this.managerVeterinariansService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.managerVeterinariansService.remove(+id);
  }
}
