import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateManagerVeterinarianDto {
  @ApiProperty({
    type: String,
    description: 'Nombre completo del veterinario',
    example: 'Juan Pérez',
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    type: String,
    description: 'Dirección de residencia del veterinario',
    example: '123 Calle Falsa, Ciudad, País',
  })
  @IsString()
  @IsNotEmpty()
  direccion: string;

  @ApiProperty({
    type: String,
    description: 'Número de teléfono del veterinario',
    example: '+1234567890',
  })
  @IsString()
  @IsNotEmpty()
  telefono: string;

  @ApiProperty({
    type: String,
    description: 'Correo electrónico del veterinario',
    example: 'juan.perez@example.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    description: 'Número de cédula o documento de identificación del veterinario',
    example: '1234567890',
  })
  @IsString()
  @IsNotEmpty()
  cc: string;

  @ApiProperty({
    type: String,
    description: 'Contraseña para la cuenta del veterinario',
    example: 'SecureP@ssword123',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({
    type: String,
    description: 'Especialidad del veterinario',
    example: 'Cirugía Veterinaria',
  })
  @IsString()
  @IsNotEmpty()
  especialidad: string;
}
