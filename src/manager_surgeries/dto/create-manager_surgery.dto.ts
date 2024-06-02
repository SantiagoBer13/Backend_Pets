import { IsString, IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateManagerSurgeryDto {
    @ApiProperty({ type: String, description: 'Token de autorización', example: 'Bearer <token>' })
  token: string;

  @ApiProperty({ type: Number, description: 'ID de la mascota', example: 1 })
  @IsInt()
  id_mascota: number;

  @ApiProperty({ type: String, description: 'Tipo de cirugía', example: 'Esterilización' })
  @IsString()
  tipo_cirugia: string;

  @ApiProperty({ type: Date, description: 'Fecha de la cirugía', example: '2024-06-01' })
  @IsDate()
  fecha_cirugia: Date;

  @ApiProperty({ type: String, description: 'Gravedad de la cirugía', example: 'Alta' })
  @IsString()
  gravedad: string;

  @ApiProperty({ type: String, description: 'Motivo de la operación', example: 'Prevención de enfermedades' })
  @IsString()
  motivo_operacion: string;
}
