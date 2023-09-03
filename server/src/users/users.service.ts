import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<{ status: number; message: string }>  {
    try {
      // Creates the user instance
      await this.prisma.users.create({
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
    return `Admin functions to be implemented.. please hold`;
  }

  findOne(id: string) {
    try {
      // Collects user data from user_id
      return this.prisma.users.findUnique({
        where: {
          user_id: id,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id: string, data: UpdateUserDto): Promise<{ statusCode: number; message: string }>  {
    try {
      // Updates the user instance
      await this.prisma.users.update({
        where: { user_id: id },
        data: data,
      });
      return {
        statusCode: 100,
        message: 'User Updated',
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id: string) {
    try {
      // Deletes the user instance
      await this.prisma.users.delete({
        where: {
          user_id: id,
        },
      });
      return {
        statusCode: 204,
        message: 'User Deleted',
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
