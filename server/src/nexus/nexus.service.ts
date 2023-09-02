import { Injectable } from '@nestjs/common';
import { CreateNexusDto } from './dto/create-nexus.dto';
import { UpdateNexusDto } from './dto/update-nexus.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class NexusService {
  constructor(private prisma: PrismaService) {}

  async create(createNexusDto: CreateNexusDto) {
    try {
      await this.prisma.nexus.create({
        data: createNexusDto, 
      });
      return {
        status: 201,
        message: 'Nexus Created',
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(id: string) {
    try {
      const nexus_data = await this.prisma.nexus.findMany({
        skip: 0,
        take: 10,
        where: {
          chronicle_id: id,
        }
      })
      return nexus_data
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, updateNexusDto: UpdateNexusDto) {
    try {
      await this.prisma.nexus.updateMany({
        where: {
          nexus_id: id,
        },
        data: updateNexusDto,
      });
      return {
        status: 100,
        message: 'Nexus Updated',
      }
    }catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.nexus.delete({
        where: {
          nexus_id: id,
        },
      });
      return {
        status: 100,
        message: 'Nexus Deleted',
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
