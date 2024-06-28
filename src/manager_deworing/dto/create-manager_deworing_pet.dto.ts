// create-manager-vaccine-pet.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';

export class CreateManagerDeworingPetDto {
  @ApiProperty({ example: 1, description: 'ID de la mascota' })
  @IsNotEmpty()
  @IsNumber()
  id_mascota: number;

  @ApiProperty({ example: 1, description: 'ID del medicamento' })
  @IsNotEmpty()
  @IsNumber()
  id_medicamento: number;

  @ApiProperty({ example: '2023-06-12T14:30:00Z', description: 'Fecha de desparacitación (ISO 8601)' })
  @IsNotEmpty()
  @IsDateString()
  fecha_desparacitacion: string;

  @ApiProperty({ example: '2023-12-12T14:30:00Z', description: 'Fecha de próxima desparacitación (ISO 8601)' })
  @IsNotEmpty()
  @IsDateString()
  fecha_proxima_desparacitacion: string;

  @ApiProperty({ example: 'Vacunación anual', description: 'Observaciones de la desparacitación' })
  @IsNotEmpty()
  @IsString()
  observaciones: string;
}
