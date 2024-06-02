import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManagerAllergiesService } from './manager_allergies.service';
import { CreateManagerAllergyDto } from './dto/create-manager_allergy.dto';
import { UpdateManagerAllergyDto } from './dto/update-manager_allergy.dto';

@Controller('manager-allergies')
export class ManagerAllergiesController {
  constructor(private readonly managerAllergiesService: ManagerAllergiesService) {}

  @Post()
  create(@Body() createManagerAllergyDto: CreateManagerAllergyDto) {
    return this.managerAllergiesService.create(createManagerAllergyDto);
  }

  @Get()
  findAll() {
    return this.managerAllergiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managerAllergiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManagerAllergyDto: UpdateManagerAllergyDto) {
    return this.managerAllergiesService.update(+id, updateManagerAllergyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managerAllergiesService.remove(+id);
  }
}
