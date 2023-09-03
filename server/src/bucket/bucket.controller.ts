import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BucketService } from './bucket.service';
import { CreateBucketDto } from './dto/create-bucket.dto';
import { UpdateBucketDto } from './dto/update-bucket.dto';

@Controller('bucket')
export class BucketController {
  constructor(private readonly bucketService: BucketService) {}

  /*Body:
    user_id: string;
    sequential_number: number;
    wiki_id: string
    completed: boolean
    ongoing: boolean
    dropped: boolean*/
  @Post()
  create(@Body() createBucketDto: CreateBucketDto) {
    return this.bucketService.create(createBucketDto);
  }

  /*Params: 
      id: user_id*/ 
  @Get('all/:id')
  findAll(@Param('id') id: string) {
    return this.bucketService.findAll(id);
  }

  /*Params: 
      id: bucket_id*/ 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bucketService.findOne(id);
  }

  /*Params: 
      id: bucket_id*/ 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBucketDto: UpdateBucketDto) {
    return this.bucketService.update(id, updateBucketDto);
  }

  /*Params: 
      id: bucket_id*/ 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bucketService.remove(+id);
  }

  /*Params: 
    id: user_id
    type: type: ongoing | dropped | completed*/ 
  @Get('request/:id/:type')
  request(@Param('id') id: string, @Param('type') type: string) {
    return this.bucketService.request(id, type);
  }
}
