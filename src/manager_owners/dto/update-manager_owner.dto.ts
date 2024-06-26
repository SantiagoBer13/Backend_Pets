import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateManagerOwnerDto } from './create-manager_owner.dto';

export class UpdateManagerOwnerDto extends PartialType(CreateManagerOwnerDto) {
    @ApiProperty({
        type: String,
        description: 'Hash de la contraseña del dueño',
        example: '$2b$10$wH6r6QJ7/ygOC5o7HbP7uOfE6O1sOMDQbO.1w.lq0YhJ4G0.sG0si', // Ejemplo de un hash de bcrypt
      })
      password_hash?: string;
}
