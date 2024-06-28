import { Controller, Post, Body } from '@nestjs/common';
import { ManagerProfilesService } from './manager_profiles.service';
import { CreateManagerProfileDto } from './dto/create-manager_profile.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('manager-profiles')
@Controller('manager-profiles')
export class ManagerProfilesController {
  constructor(
    private readonly managerProfilesService: ManagerProfilesService,
  ) {}

  @ApiOperation({ summary: 'Iniciar sesión' })
  @ApiResponse({ status: 200, description: 'Inicio de sesión exitoso', type: String }) // Puedes reemplazar 'String' con el tipo de dato de retorno si tienes un DTO específico
  @ApiResponse({ status: 401, description: 'Contraseña incorrecta' })
  @ApiResponse({ status: 404, description: 'Nombre de usuario no encontrado o rol no válido' })
  @Post()
  login(@Body() body: CreateManagerProfileDto) {
    return this.managerProfilesService.login(body);
  }
}