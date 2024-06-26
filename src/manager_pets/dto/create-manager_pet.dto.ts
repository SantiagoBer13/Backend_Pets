import { IsString, IsInt, IsDate, IsNotEmpty, IsEnum, IsDecimal, IsNumber, IsPositive, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

enum Sexo {
  Macho = 'M',
  Hembra = 'H',
}

export class CreateManagerPetDto {
  /*
  @ApiProperty({
    type: String,
    description: 'Token de autorización',
    example: 'Bearer <token>',
  })
  token: string;
  */
  @ApiProperty({
    type: String,
    description: 'Nombre de la mascota',
    example: 'Luna',
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    type: String,
    description: 'Sexo de la mascota',
    enum: ['M', 'H'],
    example: 'Hembra',
  })
  @IsEnum(Sexo)
  sexo: string;

  @ApiProperty({
    type: String,
    description: 'Número de microchip',
    example: '123456789',
  })
  @IsString()
  @IsNotEmpty()
  microchip: string;

  @ApiProperty({
    type: String,
    description: 'Raza de la mascota',
    example: 'Labrador Retriever',
  })
  @IsString()
  @IsNotEmpty()
  raza: string;

  @ApiProperty({
    type: String,
    description: 'Especie de la mascota',
    example: 'Perro',
  })
  @IsString()
  @IsNotEmpty()
  especie: string;

  @ApiProperty({
    type: Number,
    description: 'Peso de la mascota',
    example: 5.5,
  })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  peso: number;

  @ApiProperty({
    type: String,
    description: 'Color de la mascota',
    example: 'Blanco',
  })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    type: String,
    description: 'Fecha de nacimiento de la mascota',
    example: '2020-01-15',
  })
  @IsDateString()
  @IsNotEmpty()
  fecha_nacimiento: string;

  @ApiProperty({
    type: Number,
    description: 'ID del dueño de la mascota',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  id_duenyo_mascota: number;
}
