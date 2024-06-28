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
import { ManagerPetsService } from './manager_pets.service';
import { CreateManagerPetDto } from './dto/create-manager_pet.dto';
import { UpdateManagerPetDto } from './dto/update-manager_pet.dto';
import { AuthGuardVeterinarian } from 'src/auth/auth_veterinarian.guard';
import { AuthGuardUser } from 'src/auth/auth_user.guard';
import { AuthGuardCombined } from 'src/auth/auth_combined.guard';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('manager-pets')
@Controller('manager-pets')
export class ManagerPetsController {
  constructor(private readonly managerPetsService: ManagerPetsService) {}
 
  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Crear una nueva mascota' })
  @ApiResponse({ status: 201, description: 'Mascota creada exitosamente.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Post()
  create(@Body() body: CreateManagerPetDto) {
    return this.managerPetsService.create(body);
  }

  @ApiOperation({ summary: 'Obtener todas las mascotas' })
  @ApiResponse({ status: 200, description: 'Lista de todas las mascotas.' })
  @Get()
  findAll() {
    return this.managerPetsService.findAll();
  }
  
  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener todas las mascotas con sus dueños' })
  @ApiResponse({ status: 200, description: 'Lista de todas las mascotas con sus dueños.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Get('with-owner')
  findAllWithOwner() {
    return this.managerPetsService.findAllWithOwner();
  }

  @UseGuards(AuthGuardUser)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener todas las mascotas de un dueño específico' })
  @ApiResponse({ status: 200, description: 'Lista de todas las mascotas del dueño.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Get('my-pets')
  async findPetsByOwner(@Req() req) {
    const ownerId = req.user.id; // Extraer el id del dueño del token
    return this.managerPetsService.findPetsByOwner(ownerId);
  }

  @UseGuards(AuthGuardCombined)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener una mascota por ID' })
  @ApiResponse({ status: 200, description: 'Detalles de la mascota.' })
  @ApiResponse({ status: 404, description: 'Mascota no encontrada.' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.managerPetsService.findOne(+id);
  }

  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Actualizar una mascota por ID' })
  @ApiResponse({ status: 200, description: 'Mascota actualizada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Mascota no encontrada.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateManagerPetDto,
  ) {
    return this.managerPetsService.update(+id, body);
  }

  @UseGuards(AuthGuardVeterinarian)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Eliminar una mascota por ID' })
  @ApiResponse({ status: 200, description: 'Mascota eliminada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Mascota no encontrada.' })
  @ApiResponse({ status: 403, description: 'Acceso denegado.' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.managerPetsService.remove(+id);
  }
}
