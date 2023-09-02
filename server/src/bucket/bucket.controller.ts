import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BucketService } from './bucket.service';
import { CreateBucketDto } from './dto/create-bucket.dto';
import { UpdateBucketDto } from './dto/update-bucket.dto';

@Controller('bucket')
export class BucketController {
  constructor(private readonly bucketService: BucketService) {}

  @Post()
  create(@Body() createBucketDto: CreateBucketDto) {
    return this.bucketService.create(createBucketDto);
  }

  @Get('all/:id')
  findAll(@Param('id') id: string) {
    return this.bucketService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bucketService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBucketDto: UpdateBucketDto) {
    return this.bucketService.update(id, updateBucketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bucketService.remove(+id);
  }

  @Get('request/:id/:type')
  request(@Param('id') id: string, @Param('type') type: string) {
    return this.bucketService.request(id, type);
  }
}
