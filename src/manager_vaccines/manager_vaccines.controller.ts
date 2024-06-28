import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ManagerVaccinesService } from './manager_vaccines.service';
import { CreateManagerVaccineDto } from './dto/create-manager_vaccine.dto';
import { UpdateManagerVaccineDto } from './dto/update-manager_vaccine.dto';
import { CreateManagerVaccinePetDto } from './dto/create-manager_vaccine_pet.dto';
import { UpdateManagerVaccinePetDto } from './dto/update-manager_vaccine_pet.dto';
import { AuthGuardVeterinarian } from 'src/auth/auth_veterinarian.guard';
import { AuthGuardCombined } from 'src/auth/auth_combined.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('manager-vaccines')
@Controller('manager-vaccines')
export class ManagerVaccinesController {
  constructor(
    private readonly managerVaccinesService: ManagerVaccinesService,
  ) {}

  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear una nueva vacuna' })
  @ApiResponse({ status: 201, description: 'Vacuna creada exitosamente.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Post()
  create(@Body() body: CreateManagerVaccineDto) {
    return this.managerVaccinesService.create(body);
  }

  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener todas las vacunas' })
  @ApiResponse({ status: 200, description: 'Lista de todas las vacunas.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Get()
  findAll() {
    return this.managerVaccinesService.findAll();
  }

  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener una vacuna por ID' })
  @ApiResponse({ status: 200, description: 'Detalles de la vacuna.' })
  @ApiResponse({ status: 404, description: 'Vacuna no encontrada.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.managerVaccinesService.findOne(+id);
  }

  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar una vacuna por ID' })
  @ApiResponse({ status: 200, description: 'Vacuna actualizada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Vacuna no encontrada.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateManagerVaccineDto,
  ) {
    return this.managerVaccinesService.update(+id, body);
  }

  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar una vacuna por ID' })
  @ApiResponse({ status: 200, description: 'Vacuna eliminada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Vacuna no encontrada.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.managerVaccinesService.remove(+id);
  }

   // Métodos para vacunas_mascotas
   @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear una nueva vacuna para una mascota' })
  @ApiResponse({ status: 201, description: 'Vacuna para mascota creada exitosamente.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
   @Post('pets')
   createVaccinePet(@Body() body: CreateManagerVaccinePetDto, @Req() req) {
     const id_veterinario = req.user.id;
     return this.managerVaccinesService.createVaccinePet(body, id_veterinario);
   }
 
   @UseGuards(AuthGuardCombined)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener todas las vacunas de una mascota por ID' })
  @ApiResponse({ status: 200, description: 'Lista de todas las vacunas de la mascota.' })
  @ApiResponse({ status: 404, description: 'Vacunas no encontradas.' })
   @Get('pets/:id')
   findAllVaccinePet(@Param('id', ParseIntPipe) id: number) {
     return this.managerVaccinesService.findAllVaccinePet(id);
   }
 
   @UseGuards(AuthGuardCombined)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener una vacuna de una mascota por ID' })
  @ApiResponse({ status: 200, description: 'Detalles de la vacuna de la mascota.' })
  @ApiResponse({ status: 404, description: 'Vacuna de la mascota no encontrada.' })
  @Get('pets/single/:id')
   findOneVaccinePet(@Param('id', ParseIntPipe) id: number) {
     return this.managerVaccinesService.findOneVaccinePet(+id);
   }
 
   @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar una vacuna de una mascota por ID' })
  @ApiResponse({ status: 200, description: 'Vacuna de la mascota actualizada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Vacuna de la mascota no encontrada.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
   @Put('pets/:id')
   updateVaccinePet(
     @Param('id', ParseIntPipe) id: number,
     @Body() body: UpdateManagerVaccinePetDto,
     @Req() req
   ) {
    const id_veterinario = req.user.id;
    return this.managerVaccinesService.updateVaccinePet(+id, body, id_veterinario);
   }
 
   @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar una vacuna de una mascota por ID' })
  @ApiResponse({ status: 200, description: 'Vacuna de la mascota eliminada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Vacuna de la mascota no encontrada.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
   @Delete('pets/:id')
   removeVaccinePet(@Param('id', ParseIntPipe) id: number) {
     return this.managerVaccinesService.removeVaccinePet(+id);
   }

}
