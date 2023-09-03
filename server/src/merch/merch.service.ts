import { Injectable } from '@nestjs/common';
import { CreateMerchDto } from './dto/create-merch.dto';
import { UpdateMerchDto } from './dto/update-merch.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class MerchService {
  constructor(private prisma: PrismaService) {}

  async create(createMerchDto: CreateMerchDto) {
    try {
      // Creates the merch instance
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
      // Collects all merch data
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

  async findOne(id: string) {
    try {
      // Collects merch data from merch_id
      const merch_data = await this.prisma.merch.findUnique({
        where: {
          merch_id: id,
        },
      });

      // Collects user data from seller_id
      const user_data = await this.prisma.users.findUnique({
        where: {  
          user_id: merch_data.seller_id,
        },
      });
      merch_data["username"] = user_data.username;
      return merch_data
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, updateMerchDto: UpdateMerchDto) {
    try {
      // Updates the merch instance
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
      // Deletes the merch instance
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
