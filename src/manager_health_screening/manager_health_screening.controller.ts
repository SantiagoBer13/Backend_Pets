import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManagerHealthScreeningService } from './manager_health_screening.service';
import { CreateManagerHealthScreeningDto } from './dto/create-manager_health_screening.dto';
import { UpdateManagerHealthScreeningDto } from './dto/update-manager_health_screening.dto';

@Controller('manager-health-screening')
export class ManagerHealthScreeningController {
  constructor(private readonly managerHealthScreeningService: ManagerHealthScreeningService) {}

  @Post()
  create(@Body() createManagerHealthScreeningDto: CreateManagerHealthScreeningDto) {
    return this.managerHealthScreeningService.create(createManagerHealthScreeningDto);
  }

  @Get()
  findAll() {
    return this.managerHealthScreeningService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managerHealthScreeningService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManagerHealthScreeningDto: UpdateManagerHealthScreeningDto) {
    return this.managerHealthScreeningService.update(+id, updateManagerHealthScreeningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managerHealthScreeningService.remove(+id);
  }
}
