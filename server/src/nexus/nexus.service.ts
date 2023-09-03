import { Injectable } from '@nestjs/common';
import { CreateNexusDto } from './dto/create-nexus.dto';
import { UpdateNexusDto } from './dto/update-nexus.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class NexusService {
  constructor(private prisma: PrismaService) {}

  async create(createNexusDto: CreateNexusDto) {
    try {
      // Creates the nexus instance
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
      // Collects all nexus data from chronicle_id
      const nexus_data = await this.prisma.nexus.findMany({
        skip: 0,
        take: 10,
        where: {
          chronicle_id: id,
        }
      })

      // Adds username and reply_username to each nexus
      for (let i = 0; i < nexus_data.length; i++) {
        // Collects user data from user_id
        const user_data = await this.prisma.users.findUnique({
          where: {
            user_id: nexus_data[i].user_id,
          },
        });
        nexus_data[i]["username"] = user_data.username;

        // Collects user data from reply_to
        const reply_user_data = await this.prisma.users.findUnique({
          where: {
            user_id: nexus_data[i].reply_to
          },
        });
        nexus_data[i]["reply_username"] = reply_user_data.username;
      }

      return nexus_data
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, updateNexusDto: UpdateNexusDto) {
    try {
      // Updates the nexus instance
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
      // Deletes the nexus instance
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
