import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WikiService } from './wiki.service';
import { CreateWikiDto } from './dto/create-wiki.dto';
import { UpdateWikiDto } from './dto/update-wiki.dto';

@Controller('wiki')
export class WikiController {
  constructor(private readonly wikiService: WikiService) {}

  @Post()
  create(@Body() data: CreateWikiDto) {
    return this.wikiService.create(data);
  }

  @Get()
  findAll() {
    return this.wikiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wikiService.findOne(id);
  }

  @Patch(':id/:anime/:mod')
  update(@Param('id') id: string, @Body() data: UpdateWikiDto, @Param('anime') name: string, @Param ('mod') mod_id: string) {
    return this.wikiService.update(id, data, name, mod_id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wikiService.remove(id);
  }
}
