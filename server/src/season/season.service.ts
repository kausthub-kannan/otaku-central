import { Injectable } from '@nestjs/common';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SeasonService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateSeasonDto) {
    try {
      // Creates the season instance
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
      // Collects all seasons data from wiki_id
      const season_data = await this.prisma.season.findMany({
        where: {
          wiki_id: id,
        },
      });

      // Collects wiki data from wiki_id
      const wiki_data = await this.prisma.wiki.findUnique({
        where: {
          wiki_id: id,
        },
      });

      // Adds wiki_name to each season
      for (let i = 0; i < season_data.length; i++) {
        season_data[i]["wiki_name"] = wiki_data.anime_name;
      }
      return season_data
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(id: string) {
    try {
      // Collects season data from season_id
      const season_data =  await this.prisma.season.findUnique({
        where: {
          season_id: id,
        },
      });

      // Collects wiki data from wiki_id (derived from season_data)
      const wiki_data = await this.prisma.wiki.findUnique({
        where: {
          wiki_id: season_data.wiki_id,
        },
      });
      season_data["wiki_name"] = wiki_data.anime_name;
      return season_data;
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id: string, data: UpdateSeasonDto) {
    try {
      // Updates season data from season_id
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
      // Deletes season data from season_id
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
