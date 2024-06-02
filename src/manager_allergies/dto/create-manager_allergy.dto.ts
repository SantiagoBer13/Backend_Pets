import { IsString, IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateManagerAllergyDto {
    @ApiProperty({ type: String, description: 'Token de autorización', example: 'Bearer <token>' })
  token: string;

  @ApiProperty({ type: Number, description: 'ID de la mascota', example: 1 })
  @IsInt()
  id_mascota: number;

  @ApiProperty({ type: String, description: 'Nombre de la alergia', example: 'Polen' })
  @IsString()
  nombre_alergia: string;

  @ApiProperty({ type: String, description: 'Descripción de la alergia', example: 'Alergia al polen' })
  @IsString()
  descripcion: string;

  @ApiProperty({ type: Date, description: 'Fecha de diagnóstico', example: '2024-06-01' })
  @IsDate()
  fecha_diagnostico: Date;
}
