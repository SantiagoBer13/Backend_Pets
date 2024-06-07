import { IsString, IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateManagerDeworingDto {
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
    description: 'Nombre del medicamento',
    example: 'Desparasitante X',
  })
  @IsString()
  nombre_medicamento: string;

  @ApiProperty({
    type: String,
    description: 'Forma del medicamento',
    example: 'Tabletas',
  })
  @IsString()
  forma_medicamento: string;

  @ApiProperty({
    type: Date,
    description: 'Fecha de desparasitación',
    example: '2024-06-01',
  })
  @IsDate()
  fecha_desparasitacion: Date;

  @ApiProperty({
    type: Date,
    description: 'Fecha de próxima desparasitación',
    example: '2024-07-01',
  })
  @IsDate()
  fecha_proxima: Date;
}
