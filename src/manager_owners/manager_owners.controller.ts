import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { ManagerOwnersService } from './manager_owners.service';
import { CreateManagerOwnerDto } from './dto/create-manager_owner.dto';
import { UpdateManagerOwnerDto } from './dto/update-manager_owner.dto';

@Controller('manager-owners')
export class ManagerOwnersController {
  constructor(private readonly managerOwnersService: ManagerOwnersService) {}

  @Post()
  create(@Body() body: CreateManagerOwnerDto) {
    return this.managerOwnersService.create(body);
  }

  @Get()
  findAll() {
    return this.managerOwnersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.managerOwnersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateManagerOwnerDto) {
    return this.managerOwnersService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.managerOwnersService.remove(+id);
  }
}
