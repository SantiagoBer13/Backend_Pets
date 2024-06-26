import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateManagerPetDto } from './create-manager_pet.dto';

export class UpdateManagerPetDto extends PartialType(CreateManagerPetDto) {
    @ApiProperty({
        type: String,
        description: 'Estado de la mascota',
        enum: ['Activo', 'Inactivo'],
        example: 'Activo', // Ejemplo de un hash de bcrypt
      })
      estado?: string;

}
