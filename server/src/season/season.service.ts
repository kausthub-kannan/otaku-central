import { Injectable } from '@nestjs/common';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SeasonService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateSeasonDto) {
    try {
      await this.prisma.season.create({
        data,
      });
      return {
        status: 201,
        message: 'Season Created',
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll(id: string) {
    try {
      const season_data = await this.prisma.season.findMany({
        where: {
          wiki_id: id,
        },
      });
      const wiki_data = await this.prisma.wiki.findUnique({
        where: {
          wiki_id: id,
        },
      });
      console.log(wiki_data);
      return {season_data: season_data, wiki_name: wiki_data.anime_name};
    } catch (err) {
      throw new Error(err);
    }
  }

  findOne(id: string) {
    try {
      return this.prisma.season.findUnique({
        where: {
          season_id: id,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id: string, data: UpdateSeasonDto) {
    try {

      await this.prisma.season.update({
        where: {
          season_id: id,
        },
        data: data,
      });
      return {
        status: 100,
        message: 'Season Updated',
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.season.delete({
        where: {
          season_id: id,
        },
      });
      return {
        status: 204,
        message: 'Season Deleted',
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}
