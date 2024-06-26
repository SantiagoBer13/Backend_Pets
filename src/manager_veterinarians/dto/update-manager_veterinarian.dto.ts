import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateManagerVeterinarianDto } from './create-manager_veterinarian.dto';

export class UpdateManagerVeterinarianDto extends PartialType(CreateManagerVeterinarianDto) {
    @ApiProperty({
        type: String,
        description: 'Hash de la contraseña del veterinario',
        example: '$2b$10$wH6r6QJ7/ygOC5o7HbP7uOfE6O1sOMDQbO.1w.lq0YhJ4G0.sG0si', // Ejemplo de un hash de bcrypt
      })
      password_hash?: string;
}
