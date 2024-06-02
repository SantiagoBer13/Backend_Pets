import { Injectable } from '@nestjs/common';
import { CreateManagerDeworingDto } from './dto/create-manager_deworing.dto';
import { UpdateManagerDeworingDto } from './dto/update-manager_deworing.dto';

@Injectable()
export class ManagerDeworingService {
  create(createManagerDeworingDto: CreateManagerDeworingDto) {
    return 'This action adds a new managerDeworing';
  }

  findAll() {
    return `This action returns all managerDeworing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} managerDeworing`;
  }

  update(id: number, updateManagerDeworingDto: UpdateManagerDeworingDto) {
    return `This action updates a #${id} managerDeworing`;
  }

  remove(id: number) {
    return `This action removes a #${id} managerDeworing`;
  }
}
