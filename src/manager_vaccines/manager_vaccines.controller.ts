import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManagerVaccinesService } from './manager_vaccines.service';
import { CreateManagerVaccineDto } from './dto/create-manager_vaccine.dto';
import { UpdateManagerVaccineDto } from './dto/update-manager_vaccine.dto';

@Controller('manager-vaccines')
export class ManagerVaccinesController {
  constructor(private readonly managerVaccinesService: ManagerVaccinesService) {}

  @Post()
  create(@Body() createManagerVaccineDto: CreateManagerVaccineDto) {
    return this.managerVaccinesService.create(createManagerVaccineDto);
  }

  @Get()
  findAll() {
    return this.managerVaccinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managerVaccinesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManagerVaccineDto: UpdateManagerVaccineDto) {
    return this.managerVaccinesService.update(+id, updateManagerVaccineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managerVaccinesService.remove(+id);
  }
}
