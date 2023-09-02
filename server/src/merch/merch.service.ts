import { Injectable } from '@nestjs/common';
import { CreateMerchDto } from './dto/create-merch.dto';
import { UpdateMerchDto } from './dto/update-merch.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class MerchService {
  constructor(private prisma: PrismaService) {}

  async create(createMerchDto: CreateMerchDto) {
    try {
      await this.prisma.merch.create({
        data: createMerchDto,
      });
      return {
        status: 201,
        message: 'Merch Created',
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  findAll() {
    try {
      return this.prisma.merch.findMany({
        skip: 2,
        take: 10,
        orderBy: {
          merch_id: 'asc',
        },
      })
    } catch (error) {
      throw new Error(error);
    }
  }

  findOne(id: string) {
    try {
      return this.prisma.merch.findUnique({
        where: {
          merch_id: id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, updateMerchDto: UpdateMerchDto) {
    try {
      await this.prisma.merch.update({
        where: {
          merch_id: id,
        },
        data: updateMerchDto,
      });
      return {
        status: 100,
        message: 'Merch Updated',
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try{
      await this.prisma.merch.delete({
        where: {
          merch_id: id,
        },
      });
      return {
        status: 204,
        message: 'Merch Deleted',
      }
    }catch (error) {
    throw new Error(error);
  }
}
}
