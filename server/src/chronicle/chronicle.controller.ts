import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChronicleService } from './chronicle.service';
import { CreateChronicleDto } from './dto/create-chronicle.dto';
import { UpdateChronicleDto } from './dto/update-chronicle.dto';

@Controller('chronicle')
export class ChronicleController {
  constructor(private readonly chronicleService: ChronicleService) {}

  @Post()
  create(@Body() createChronicleDto: CreateChronicleDto) {
    return this.chronicleService.create(createChronicleDto);
  }

  @Get()
  findAll() {
    return this.chronicleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chronicleService.findOne(id);
  }

  @Get('created/:id')
  createdAll(@Param('id') id: string) {
    return this.chronicleService.createdAll(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChronicleDto: UpdateChronicleDto) {
    return this.chronicleService.update(id, updateChronicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chronicleService.remove(id);
  }
}
