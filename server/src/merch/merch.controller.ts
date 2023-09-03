import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MerchService } from './merch.service';
import { CreateMerchDto } from './dto/create-merch.dto';
import { UpdateMerchDto } from './dto/update-merch.dto';

@Controller('merch')
export class MerchController {
  constructor(private readonly merchService: MerchService) {}

  /*Body:
    seller_id: string
    merch: string
    req_nani: number
    description: string
    image: string
    avalibility_status: boolean
    rating: integer*/
  @Post()
  create(@Body() createMerchDto: CreateMerchDto) {
    return this.merchService.create(createMerchDto);
  }

  @Get()
  findAll() { // Gets all merch
    return this.merchService.findAll();
  }

  /*Params:
    merch_id: string*/
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.merchService.findOne(id);
  }

  /*Params:
    merch_id: string*/
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMerchDto: UpdateMerchDto) {
    return this.merchService.update(id, updateMerchDto);
  }

  /*Params:
    merch_id: string*/
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.merchService.remove(id);
  }
}
