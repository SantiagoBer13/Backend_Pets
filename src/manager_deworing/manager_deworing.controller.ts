import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Req, ParseIntPipe } from '@nestjs/common';
import { ManagerDeworingService } from './manager_deworing.service';
import { CreateManagerDeworingDto } from './dto/create-manager_deworing.dto';
import { UpdateManagerDeworingDto } from './dto/update-manager_deworing.dto';
import { CreateManagerDeworingPetDto } from './dto/create-manager_deworing_pet.dto';
import { UpdateManagerDeworingPetDto } from './dto/update-manager_deworing_pet.dto';
import { AuthGuardVeterinarian } from 'src/auth/auth_veterinarian.guard';
import { AuthGuardCombined } from 'src/auth/auth_combined.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('manager-deworing')
@Controller('manager-deworing')
export class ManagerDeworingController {
  constructor(
    private readonly managerDeworingService: ManagerDeworingService,
  ) {}

  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear un nuevo registro de desparasitación' })
  @ApiResponse({ status: 201, description: 'Registro de desparasitación creado exitosamente.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Post()
  create(@Body() body: CreateManagerDeworingDto) {
    return this.managerDeworingService.create(body);
  }

  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener todos los registros de desparasitación' })
  @ApiResponse({ status: 200, description: 'Lista de todos los registros de desparasitación.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Get()
  findAll() {
    return this.managerDeworingService.findAll();
  }

  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener un registro de desparasitación por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del registro de desparasitación.' })
  @ApiResponse({ status: 404, description: 'Registro de desparasitación no encontrado.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.managerDeworingService.findOne(+id);
  }

  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar un registro de desparasitación por ID' })
  @ApiResponse({ status: 200, description: 'Registro de desparasitación actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Registro de desparasitación no encontrado.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateManagerDeworingDto,
  ) {
    return this.managerDeworingService.update(+id, body);
  }

  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar un registro de desparasitación por ID' })
  @ApiResponse({ status: 200, description: 'Registro de desparasitación eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Registro de desparasitación no encontrado.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.managerDeworingService.remove(+id);
  }

  // Métodos para desparacitaciones
  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear un nuevo registro de desparasitación para una mascota' })
  @ApiResponse({ status: 201, description: 'Registro de desparasitación para mascota creado exitosamente.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Post('pets')
  createDeworingPet(@Body() body: CreateManagerDeworingPetDto, @Req() req) {
    const id_veterinario = req.user.id;
    return this.managerDeworingService.createDeworingPet(body, id_veterinario);
  }

  @UseGuards(AuthGuardCombined)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener todos los registros de desparasitación de una mascota por ID' })
  @ApiResponse({ status: 200, description: 'Lista de todos los registros de desparasitación de la mascota.' })
  @ApiResponse({ status: 404, description: 'Registros de desparasitación no encontrados.' })
  @Get('pets/:id')
  findAllDeworingPet(@Param('id', ParseIntPipe) id: number) {
    return this.managerDeworingService.findAllDeworingPet(id);
  }

  @UseGuards(AuthGuardCombined)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener un registro de desparasitación de una mascota por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del registro de desparasitación de la mascota.' })
  @ApiResponse({ status: 404, description: 'Registro de desparasitación no encontrado.' })
  @Get('pets/single/:id')
  findOneDeworingPet(@Param('id', ParseIntPipe) id: number) {
    return this.managerDeworingService.findOneDeworingPet(+id);
  }

  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar un registro de desparasitación de una mascota por ID' })
  @ApiResponse({ status: 200, description: 'Registro de desparasitación de la mascota actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Registro de desparasitación de la mascota no encontrado.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Put('pets/:id')
  updateDeworingPet(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateManagerDeworingPetDto,
    @Req() req 
  ) {
    const id_veterinario = req.user.id;
    return this.managerDeworingService.updateDeworingPet(+id, body, id_veterinario );
  }

  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar un registro de desparasitación de una mascota por ID' })
  @ApiResponse({ status: 200, description: 'Registro de desparasitación de la mascota eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Registro de desparasitación de la mascota no encontrado.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Delete('pets/:id')
  removeDeworingPet(@Param('id', ParseIntPipe) id: number) {
    return this.managerDeworingService.removeDeworingPet(+id);
  }
}
