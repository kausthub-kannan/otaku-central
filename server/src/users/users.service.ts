import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { users } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  /* POST - Create new user */
  async create(data: CreateUserDto): Promise<users> {
    try {
      return this.prisma.users.create({
        data,
      });
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
  update(id: string, data: UpdateUserDto) {
    try {
      return this.prisma.users.update({
        where: { user_id: id },
        data: data,
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  /* DELETE - Delete User */
  remove(id: string) {
    try {
      return this.prisma.users.delete({
        where: {
          user_id: id,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}
