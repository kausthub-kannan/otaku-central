import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChronicleService } from './chronicle.service';
import { CreateChronicleDto } from './dto/create-chronicle.dto';
import { UpdateChronicleDto } from './dto/update-chronicle.dto';

@Controller('chronicle')
export class ChronicleController {
  constructor(private readonly chronicleService: ChronicleService) {}

  /*Body:
    writer_id: string
    title: string
    content: string
    likes: number*/
  @Post()
  create(@Body() createChronicleDto: CreateChronicleDto) {
    return this.chronicleService.create(createChronicleDto);
  }

  @Get()
  findAll() {
    return this.chronicleService.findAll();
  }

  /*Params:
      id: chronicle_id*/
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chronicleService.findOne(id);
  }

  /*Params:
    id: user_id*/
  @Get('created/:id')
  createdAll(@Param('id') id: string) {
    return this.chronicleService.createdAll(id);
  }

  /*Params:
      id: chronicle_id*/
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChronicleDto: UpdateChronicleDto) {
    return this.chronicleService.update(id, updateChronicleDto);
  }

  /*Params:
      id: chronicle_id*/
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chronicleService.remove(id);
  }
}
