import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ManagerDeworingService } from './manager_deworing.service';
import { CreateManagerDeworingDto } from './dto/create-manager_deworing.dto';
import { UpdateManagerDeworingDto } from './dto/update-manager_deworing.dto';

@Controller('manager-deworing')
export class ManagerDeworingController {
  constructor(
    private readonly managerDeworingService: ManagerDeworingService,
  ) {}

  @Post()
  create(@Body() createManagerDeworingDto: CreateManagerDeworingDto) {
    return this.managerDeworingService.create(createManagerDeworingDto);
  }

  @Get()
  findAll() {
    return this.managerDeworingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managerDeworingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateManagerDeworingDto: UpdateManagerDeworingDto,
  ) {
    return this.managerDeworingService.update(+id, updateManagerDeworingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managerDeworingService.remove(+id);
  }
}
