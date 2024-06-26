import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateManagerOwnerDto {
  @ApiProperty({
    type: String,
    description: 'Nombre completo del dueño de la mascota',
    example: 'Juan Pérez',
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    type: String,
    description: 'Dirección de residencia del dueño de la mascota',
    example: '123 Calle Falsa, Ciudad, País',
  })
  @IsString()
  @IsNotEmpty()
  direccion: string;

  @ApiProperty({
    type: String,
    description: 'Número de teléfono del dueño de la mascota',
    example: '+1234567890',
  })
  @IsString()
  @IsNotEmpty()
  telefono: string;

  @ApiProperty({
    type: String,
    description: 'Correo electrónico del dueño de la mascota',
    example: 'juan.perez@example.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    description: 'Número de cédula o documento de identificación del dueño de la mascota',
    example: '1234567890',
  })
  @IsString()
  @IsNotEmpty()
  cc: string;

  @ApiProperty({
    type: String,
    description: 'Contraseña para la cuenta del dueño de la mascota',
    example: 'SecureP@ssword123',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
