import { Controller, Get } from '@nestjs/common';
import { ManagerStatisticsService } from './manager-statistics.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('manager-statistics')
@Controller('manager-statistics')
export class ManagerStatisticsController {
  constructor(private readonly managerStatisticsService: ManagerStatisticsService) {}

  @Get('total-mascotas')
  @ApiOperation({ summary: 'Obtener el total de mascotas' })
  @ApiResponse({ status: 200, description: 'Total de mascotas obtenidas exitosamente' })
  getTotalMascotas() {
    return this.managerStatisticsService.getTotalMascotas();
  }

  @Get('mascotas-felinas-caninas')
  @ApiOperation({ summary: 'Obtener el total de mascotas felinas y caninas' })
  @ApiResponse({ status: 200, description: 'Total de mascotas felinas y caninas obtenidas exitosamente' })
  getMascotasFelinasCaninas() {
    return this.managerStatisticsService.getMascotasFelinasCaninas();
  }

  @Get('mascotas-por-tipo')
  @ApiOperation({ summary: 'Obtener el total de mascotas por tipo' })
  @ApiResponse({ status: 200, description: 'Total de mascotas por tipo obtenidas exitosamente' })
  getMascotasPorTipo() {
    return this.managerStatisticsService.getMascotasPorTipo();
  }

  @Get('etapa-crecimiento')
  @ApiOperation({ summary: 'Obtener el total de mascotas por etapa de crecimiento' })
  @ApiResponse({ status: 200, description: 'Total de mascotas por etapa de crecimiento obtenidas exitosamente' })
  getEtapaCrecimiento() {
    return this.managerStatisticsService.getEtapaCrecimiento();
  }

  @Get('vacunables-desparasitables')
  @ApiOperation({ summary: 'Obtener el total de mascotas que pueden vacunarse y desparasitarse' })
  @ApiResponse({ status: 200, description: 'Total de mascotas que pueden vacunarse y desparasitarse obtenidas exitosamente' })
  getVacunablesDesparasitables() {
    return this.managerStatisticsService.getVacunablesDesparasitables();
  }

  @Get('vacunas-desparasitaciones-aplicadas')
  @ApiOperation({ summary: 'Obtener el total de vacunas y desparasitaciones aplicadas' })
  @ApiResponse({ status: 200, description: 'Total de vacunas y desparasitaciones aplicadas obtenidas exitosamente' })
  getVacunasDesparasitacionesAplicadas() {
    return this.managerStatisticsService.getVacunasDesparasitacionesAplicadas();
  }

  @Get('mascotas-por-vereda')
  @ApiOperation({ summary: 'Obtener el total de mascotas por vereda' })
  @ApiResponse({ status: 200, description: 'Total de mascotas por vereda obtenidas exitosamente' })
  getMascotasPorVereda() {
    return this.managerStatisticsService.getMascotasPorVereda();
  }

  @Get('duenos-mascotas')
  @ApiOperation({ summary: 'Obtener el total de dueños de mascotas' })
  @ApiResponse({ status: 200, description: 'Total de dueños de mascotas obtenidos exitosamente' })
  getDuenosMascotas() {
    return this.managerStatisticsService.getDuenosMascotas();
  }

  @Get('mascotas-por-sexo')
  @ApiOperation({ summary: 'Obtener el total de mascotas por sexo' })
  @ApiResponse({ status: 200, description: 'Total de mascotas por sexo obtenidas exitosamente' })
  getMascotasPorSexo() {
    return this.managerStatisticsService.getMascotasPorSexo();
  }

  @Get('tasa-crecimiento')
  @ApiOperation({ summary: 'Obtener la tasa de crecimiento de mascotas' })
  @ApiResponse({ status: 200, description: 'Tasa de crecimiento de mascotas obtenida exitosamente' })
  getTasaCrecimiento() {
    return this.managerStatisticsService.getTasaCrecimiento();
  }
}
