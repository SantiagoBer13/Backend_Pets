import { Injectable } from '@nestjs/common';
import { CreateManagerAllergyDto } from './dto/create-manager_allergy.dto';
import { UpdateManagerAllergyDto } from './dto/update-manager_allergy.dto';

@Injectable()
export class ManagerAllergiesService {
  create(createManagerAllergyDto: CreateManagerAllergyDto) {
    return 'This action adds a new managerAllergy';
  }

  findAll() {
    return `This action returns all managerAllergies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} managerAllergy`;
  }

  update(id: number, updateManagerAllergyDto: UpdateManagerAllergyDto) {
    return `This action updates a #${id} managerAllergy`;
  }

  remove(id: number) {
    return `This action removes a #${id} managerAllergy`;
  }
}
