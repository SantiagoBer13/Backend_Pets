import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManagerSurgeriesService } from './manager_surgeries.service';
import { CreateManagerSurgeryDto } from './dto/create-manager_surgery.dto';
import { UpdateManagerSurgeryDto } from './dto/update-manager_surgery.dto';

@Controller('manager-surgeries')
export class ManagerSurgeriesController {
  constructor(private readonly managerSurgeriesService: ManagerSurgeriesService) {}

  @Post()
  create(@Body() createManagerSurgeryDto: CreateManagerSurgeryDto) {
    return this.managerSurgeriesService.create(createManagerSurgeryDto);
  }

  @Get()
  findAll() {
    return this.managerSurgeriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managerSurgeriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManagerSurgeryDto: UpdateManagerSurgeryDto) {
    return this.managerSurgeriesService.update(+id, updateManagerSurgeryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managerSurgeriesService.remove(+id);
  }
}
