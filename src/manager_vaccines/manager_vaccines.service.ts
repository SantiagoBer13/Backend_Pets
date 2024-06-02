import { Injectable } from '@nestjs/common';
import { CreateManagerVaccineDto } from './dto/create-manager_vaccine.dto';
import { UpdateManagerVaccineDto } from './dto/update-manager_vaccine.dto';

@Injectable()
export class ManagerVaccinesService {
  create(createManagerVaccineDto: CreateManagerVaccineDto) {
    return 'This action adds a new managerVaccine';
  }

  findAll() {
    return `This action returns all managerVaccines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} managerVaccine`;
  }

  update(id: number, updateManagerVaccineDto: UpdateManagerVaccineDto) {
    return `This action updates a #${id} managerVaccine`;
  }

  remove(id: number) {
    return `This action removes a #${id} managerVaccine`;
  }
}
