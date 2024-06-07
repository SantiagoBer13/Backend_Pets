import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateManagerProfileDto {
    @ApiProperty({
        type: String,
        description: 'Rol (usuario o veterinario)',
        example: 'veterinario',
    })
    @IsString()
    @IsNotEmpty()
    rol: string

    @ApiProperty({
        type: String,
        description: 'Nombre de usuario',
        example: 'jorge123',
    })
    @IsString()
    @IsNotEmpty()
    username: string

    @ApiProperty({
        type: String,
        description: 'Contraseña de la cuenta',
        example: 'Jorg3902',
    })
    @IsString()
    @IsNotEmpty()
    password: string
}
