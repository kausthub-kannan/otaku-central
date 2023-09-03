import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeasonService } from './season.service';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';

@Controller('season')
export class SeasonController {
  constructor(private readonly seasonService: SeasonService) {}

  @Post()
  create(@Body() data: CreateSeasonDto) {
    return this.seasonService.create(data);
  }

  /*Params:
    id: wiki_id*/
  @Get('all/:id')
  findAll(@Param('id') id: string) {
    return this.seasonService.findAll(id);
  }

  /*Params:
    id: season_id*/
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.seasonService.findOne(id);
  }

  /*Params:
    id: season_id*/
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeasonDto: UpdateSeasonDto) {
    return this.seasonService.update(id, updateSeasonDto);
  }

  /*Params:
    id: season_id*/
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seasonService.remove(id);
  }
}
