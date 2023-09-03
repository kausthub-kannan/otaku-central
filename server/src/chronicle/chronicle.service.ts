import { Injectable } from '@nestjs/common';
import { CreateChronicleDto } from './dto/create-chronicle.dto';
import { UpdateChronicleDto } from './dto/update-chronicle.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class ChronicleService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateChronicleDto) {
    try {
      // Creates the chronicle instance
      await this.prisma.chronicle.create({
        data,
      });
      return {
        status: 201,
        message: 'Chronicle Created',
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll() {
    try {
      // Collects all chronicle data
      const chronicle_data = await this.prisma.chronicle.findMany({
        take: 10,
        orderBy: {
          likes: 'desc',
        },
      })

      // Collects user data from writer_id
      for (let i = 0; i < chronicle_data.length; i++) {
        const user_data = await this.prisma.users.findUnique({
          where: {
            user_id: chronicle_data[i].writer_id
          }
        });
        chronicle_data[i]["username"] = user_data.username
      }
      return chronicle_data
    } catch (error) {
      throw new Error(error); 
    }
  }

  createdAll(id: string) {
    try {
      // Collects all chronicle data from writer_id
      return this.prisma.chronicle.findMany({
        where: {
          writer_id: id
        }
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    try {
      // Collects chronicle data from chronicle_id
      const chronicle_data = await this.prisma.chronicle.findUnique({
        where: {
          chronicle_id: id
        }
      });

      // Collects user data from writer_id
      const user_data = await this.prisma.users.findUnique({
        where: {
          user_id: chronicle_data.writer_id
        } 
      });
      chronicle_data["username"] = user_data.username

      return chronicle_data
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, data: UpdateChronicleDto) {
    try {
      // Updates the chronicle instance
      await this.prisma.chronicle.updateMany({
        where: {
          chronicle_id: id
        },
        data: data
      });

      return {
        status: 100,
        message: 'Chronicle Updated',
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try {
      // Deletes the chronicle instance
      await this.prisma.chronicle.delete({
        where: {
          chronicle_id: id
        }
      });
      
      return {
        status: 204,
        message: 'Chronicle Deleted',
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
