import { Injectable } from '@nestjs/common';
import { CreateManagerHealthScreeningDto } from './dto/create-manager_health_screening.dto';
import { UpdateManagerHealthScreeningDto } from './dto/update-manager_health_screening.dto';

@Injectable()
export class ManagerHealthScreeningService {
  create(createManagerHealthScreeningDto: CreateManagerHealthScreeningDto) {
    return 'This action adds a new managerHealthScreening';
  }

  findAll() {
    return `This action returns all managerHealthScreening`;
  }

  findOne(id: number) {
    return `This action returns a #${id} managerHealthScreening`;
  }

  update(
    id: number,
    updateManagerHealthScreeningDto: UpdateManagerHealthScreeningDto,
  ) {
    return `This action updates a #${id} managerHealthScreening`;
  }

  remove(id: number) {
    return `This action removes a #${id} managerHealthScreening`;
  }
}
