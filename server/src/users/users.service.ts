import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  /* POST - Create new user */
  async create(data: CreateUserDto): Promise<{ status: number; message: string }>  {
    try {
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

  /* GET - Admin control */
  findAll() {
    return `Admin functions to be implemented.. please hold`;
  }

  /* GET - Get User details */
  findOne(id: string) {
    try {
      return this.prisma.users.findUnique({
        where: {
          user_id: id,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  /* PUT - Update User Details */
  async update(id: string, data: UpdateUserDto): Promise<{ status: number; message: string }>  {
    try {
      await this.prisma.users.update({
        where: { user_id: id },
        data: data,
      });
      return {
        status: 100,
        message: 'User Updated',
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  /* DELETE - Delete User */
  async remove(id: string) {
    try {
      await this.prisma.users.delete({
        where: {
          user_id: id,
        },
      });
      return {
        status: 204,
        message: 'User Deleted',
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
