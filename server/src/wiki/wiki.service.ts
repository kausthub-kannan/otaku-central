import { Injectable } from '@nestjs/common';
import { CreateWikiDto } from './dto/create-wiki.dto';
import { UpdateWikiDto } from './dto/update-wiki.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class WikiService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateWikiDto) {
    try {
      await this.prisma.wiki.create({
        data,
      });
      return {
        status: 201,
        message: 'Wiki Created',
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  findAll() {
    return `This action returns all wiki`;
  }

  findOne(id: string) {
    try {
      return this.prisma.wiki.findUnique({
        where: {
          wiki_id: id,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id: string, data: UpdateWikiDto, name: string, mod_id: string) {
    try {
      console.log(data);
      
      // You can use 'update' instead of 'updateMany' if you're updating a single record.
      await this.prisma.wiki.updateMany({
        where: {
          wiki_id: id,
          anime_name: name,
          mod_id: mod_id,
        },
        data: data,
      });
      
      return {
        status: 100,
        message: 'Wiki has been updated',
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.wiki.delete({
        where: {
          wiki_id: id,
        },
      });
      return {
        status: 204,
        message: 'Wiki Deleted',
      }
    } catch (err) {
      throw new Error(err);
    }
  }
  }
