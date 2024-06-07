import { IsString, IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateManagerVaccineDto {
  @ApiProperty({
    type: String,
    description: 'Token de autorización',
    example: 'Bearer <token>',
  })
  token: string;

  @ApiProperty({ type: Number, description: 'ID de la mascota', example: 1 })
  @IsInt()
  id_mascota: number;

  @ApiProperty({
    type: String,
    description: 'Nombre de la vacuna',
    example: 'Vacuna contra la rabia',
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    type: String,
    description: 'Número de lote de la vacuna',
    example: 'ABC123',
  })
  @IsString()
  numero_lote: string;

  @ApiProperty({
    type: Date,
    description: 'Fecha de vacunación',
    example: '2024-06-01',
  })
  @IsDate()
  fecha_vacunacion: Date;

  @ApiProperty({
    type: Date,
    description: 'Fecha próxima de vacunación',
    example: '2024-07-01',
  })
  @IsDate()
  fecha_proxima_vacunacion: Date;
}
