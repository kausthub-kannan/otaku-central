import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MerchService } from './merch.service';
import { CreateMerchDto } from './dto/create-merch.dto';
import { UpdateMerchDto } from './dto/update-merch.dto';

@Controller('merch')
export class MerchController {
  constructor(private readonly merchService: MerchService) {}

  @Post()
  create(@Body() createMerchDto: CreateMerchDto) {
    return this.merchService.create(createMerchDto);
  }

  @Get()
  findAll() {
    return this.merchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.merchService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMerchDto: UpdateMerchDto) {
    return this.merchService.update(id, updateMerchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.merchService.remove(id);
  }
}
