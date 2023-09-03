import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NexusService } from './nexus.service';
import { CreateNexusDto } from './dto/create-nexus.dto';
import { UpdateNexusDto } from './dto/update-nexus.dto';

@Controller('nexus')
export class NexusController {
  constructor(private readonly nexusService: NexusService) {}

  /*Body:
    chronicle_id: string
    user_id: string
    reply_to: string
    content: string*/
  @Post()
  create(@Body() createNexusDto: CreateNexusDto) {
    return this.nexusService.create(createNexusDto);
  }

  /*Params:
    id: chronicle_id*/
  @Get('chronicle/:id')
  findAll(@Param('id') id: string) {
    return this.nexusService.findAll(id);
  }

  /*Params:
    id: nexus_id*/
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNexusDto: UpdateNexusDto) {
    return this.nexusService.update(id, updateNexusDto);
  }

  /*Params:
    id: nexus_id*/
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nexusService.remove(id);
  }
}
