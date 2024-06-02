import { Injectable } from '@nestjs/common';
import { CreateManagerSurgeryDto } from './dto/create-manager_surgery.dto';
import { UpdateManagerSurgeryDto } from './dto/update-manager_surgery.dto';

@Injectable()
export class ManagerSurgeriesService {
  create(createManagerSurgeryDto: CreateManagerSurgeryDto) {
    return 'This action adds a new managerSurgery';
  }

  findAll() {
    return `This action returns all managerSurgeries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} managerSurgery`;
  }

  update(id: number, updateManagerSurgeryDto: UpdateManagerSurgeryDto) {
    return `This action updates a #${id} managerSurgery`;
  }

  remove(id: number) {
    return `This action removes a #${id} managerSurgery`;
  }
}
