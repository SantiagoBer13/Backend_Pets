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
import { ManagerVaccinesService } from './manager_vaccines.service';
import { CreateManagerVaccineDto } from './dto/create-manager_vaccine.dto';
import { UpdateManagerVaccineDto } from './dto/update-manager_vaccine.dto';
import { CreateManagerVaccinePetDto } from './dto/create-manager_vaccine_pet.dto';
import { UpdateManagerVaccinePetDto } from './dto/update-manager_vaccine_pet.dto';

@Controller('manager-vaccines')
export class ManagerVaccinesController {
  constructor(
    private readonly managerVaccinesService: ManagerVaccinesService,
  ) {}

  @Post()
  create(@Body() body: CreateManagerVaccineDto) {
    return this.managerVaccinesService.create(body);
  }

  @Get()
  findAll() {
    return this.managerVaccinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.managerVaccinesService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateManagerVaccineDto,
  ) {
    return this.managerVaccinesService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.managerVaccinesService.remove(+id);
  }

   // Métodos para vacunas_mascotas
   @Post('pets')
   createVaccinePet(@Body() body: CreateManagerVaccinePetDto) {
     return this.managerVaccinesService.createVaccinePet(body);
   }
 
   @Get('pets/:id')
   findAllVaccinePet(@Param('id', ParseIntPipe) id: number) {
     return this.managerVaccinesService.findAllVaccinePet(id);
   }
 
   @Get('pets/single/:id')
   findOneVaccinePet(@Param('id', ParseIntPipe) id: number) {
     return this.managerVaccinesService.findOneVaccinePet(+id);
   }
 
   @Put('pets/:id')
   updateVaccinePet(
     @Param('id', ParseIntPipe) id: number,
     @Body() body: UpdateManagerVaccinePetDto,
   ) {
     return this.managerVaccinesService.updateVaccinePet(+id, body);
   }
 
   @Delete('pets/:id')
   removeVaccinePet(@Param('id', ParseIntPipe) id: number) {
     return this.managerVaccinesService.removeVaccinePet(+id);
   }

}
