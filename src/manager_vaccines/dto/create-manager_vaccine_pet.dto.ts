// create-manager-vaccine-pet.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';

export class CreateManagerVaccinePetDto {
  @ApiProperty({ example: 1, description: 'ID de la mascota' })
  @IsNotEmpty()
  @IsNumber()
  id_mascota: number;

  @ApiProperty({ example: 1, description: 'ID de la vacuna' })
  @IsNotEmpty()
  @IsNumber()
  id_vacuna: number;

  @ApiProperty({ example: '2023-06-12T14:30:00Z', description: 'Fecha de vacunación (ISO 8601)' })
  @IsNotEmpty()
  @IsDateString()
  fecha_vacunacion: string;

  @ApiProperty({ example: '2023-12-12T14:30:00Z', description: 'Fecha de próxima vacunación (ISO 8601)' })
  @IsNotEmpty()
  @IsDateString()
  fecha_proxima_vacunacion: string;

  @ApiProperty({ example: 'primera', description: 'Dosis de la vacuna' })
  @IsNotEmpty()
  @IsString()
  dosis: string;

  @ApiProperty({ example: 'Vacunación anual', description: 'Motivo de la vacunación' })
  @IsNotEmpty()
  @IsString()
  motivo: string;
}

