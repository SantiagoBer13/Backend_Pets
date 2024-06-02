import { IsString, IsInt, IsDate, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


enum Sexo {
    Macho = 'Macho',
    Hembra = 'Hembra',
  }

export class CreateManagerPetDto {
    @ApiProperty({ type: String, description: 'Token de autorización', example: 'Bearer <token>' })
  token: string;

  @ApiProperty({ type: String, description: 'Nombre de la mascota', example: 'Luna' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ type: String, description: 'Sexo de la mascota', enum: ['Macho', 'Hembra'], example: 'Hembra' })
  @IsEnum(Sexo)
  sexo: string;

  @ApiProperty({ type: String, description: 'Número de microchip', example: '123456789' })
  @IsString()
  @IsNotEmpty()
  microchip: string;

  @ApiProperty({ type: String, description: 'Raza de la mascota', example: 'Labrador Retriever' })
  @IsString()
  @IsNotEmpty()
  raza: string;

  @ApiProperty({ type: String, description: 'Especie de la mascota', example: 'Perro' })
  @IsString()
  @IsNotEmpty()
  especie: string;

  @ApiProperty({ type: Number, description: 'Edad de la mascota en años', example: 3 })
  @IsInt()
  @IsNotEmpty()
  edad: number;

  @ApiProperty({ type: String, description: 'Peso de la mascota', example: '5 kg' })
  @IsString()
  @IsNotEmpty()
  peso: string;

  @ApiProperty({ type: String, description: 'Color de la mascota', example: 'Blanco' })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({ type: Date, description: 'Fecha de nacimiento de la mascota', example: '2020-01-15' })
  @IsDate()
  @IsNotEmpty()
  fecha_nacimiento: Date;

  @ApiProperty({ type: Number, description: 'ID del dueño de la mascota', example: 1 })
  @IsInt()
  @IsNotEmpty()
  id_dueño_mascota: number;
}
