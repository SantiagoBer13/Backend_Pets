import { IsString, IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateManagerHealthScreeningDto {
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
    description: 'Tipo de examen',
    example: 'Examen de sangre',
  })
  @IsString()
  tipo_examen: string;

  @ApiProperty({
    type: String,
    description: 'Resultado del examen',
    example: 'Negativo',
  })
  @IsString()
  resultado: string;

  @ApiProperty({
    type: Date,
    description: 'Fecha del examen',
    example: '2024-06-01',
  })
  @IsDate()
  fecha_examen: Date;
}
