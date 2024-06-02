import { Injectable } from '@nestjs/common';
import { CreateManagerPetDto } from './dto/create-manager_pet.dto';
import { UpdateManagerPetDto } from './dto/update-manager_pet.dto';

@Injectable()
export class ManagerPetsService {
  create(createManagerPetDto: CreateManagerPetDto) {
    return 'This action adds a new managerPet';
  }

  findAll() {
    return `This action returns all managerPets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} managerPet`;
  }

  update(id: number, updateManagerPetDto: UpdateManagerPetDto) {
    return `This action updates a #${id} managerPet`;
  }

  remove(id: number) {
    return `This action removes a #${id} managerPet`;
  }
}
