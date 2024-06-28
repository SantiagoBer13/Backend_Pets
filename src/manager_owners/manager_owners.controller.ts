import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ManagerOwnersService } from './manager_owners.service';
import { CreateManagerOwnerDto } from './dto/create-manager_owner.dto';
import { UpdateManagerOwnerDto } from './dto/update-manager_owner.dto';
import { AuthGuardVeterinarian } from 'src/auth/auth_veterinarian.guard';
import { AuthGuardCombined } from 'src/auth/auth_combined.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('manager-owners')
@Controller('manager-owners')
export class ManagerOwnersController {
  constructor(private readonly managerOwnersService: ManagerOwnersService) {}

  @ApiOperation({ summary: 'Crear un nuevo dueño' })
  @ApiResponse({ status: 201, description: 'Dueño creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  @Post()
  create(@Body() body: CreateManagerOwnerDto) {
    return this.managerOwnersService.create(body);
  }

  // Futuro: Integrar AUTH para administrador
  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener todos los dueños' })
  @ApiResponse({ status: 200, description: 'Lista de todos los dueños.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Get()
  findAll() {
    return this.managerOwnersService.findAll();
  }

  // Futuro: Integrar AUTH para administrador
  @UseGuards(AuthGuardCombined)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener un dueño por ID' })
  @ApiResponse({ status: 200, description: 'Detalles del dueño.' })
  @ApiResponse({ status: 404, description: 'Dueño no encontrado.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.managerOwnersService.findOne(+id);
  }

  // Futuro: Integrar AUTH para administrador
  @UseGuards(AuthGuardCombined)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar un dueño por ID' })
  @ApiResponse({ status: 200, description: 'Dueño actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Dueño no encontrado.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateManagerOwnerDto) {
    return this.managerOwnersService.update(+id, body);
  }

  // Futuro: Integrar AUTH para administrador
  @UseGuards(AuthGuardCombined)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar un dueño por ID' })
  @ApiResponse({ status: 200, description: 'Dueño eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Dueño no encontrado.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.managerOwnersService.remove(+id);
  }
}
