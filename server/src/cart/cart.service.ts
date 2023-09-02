import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async create(createCartDto: CreateCartDto) {
    try {
      await this.prisma.cart.create({
        data: createCartDto,
      });
      return {
        status: 201,
        message: 'Cart Item Created',
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(id: string) {
    try {
      const cart_data = await this.prisma.cart.findMany({
        where: {
          user_id: id,
        }
      });
      let result = []
      for (let i = 0; i < cart_data.length; i++) {
        const element = cart_data[i];
        const item_data = await this.prisma.merch.findUnique({
          where: {
            merch_id: element.merch_id,
          }
        })
        const merch_data = await this.prisma.merch.findUnique({
          where: {
            merch_id: element.merch_id,
      }})
      result.push(Object.assign(element, merch_data))
    }
    return result
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    try {
      const cart_data= await this.prisma.cart.findUnique({
        where: {
          order_id: id,
        },
      });
      const merch_data = await this.prisma.merch.findUnique({
        where: {
          merch_id: cart_data.merch_id,
        }
      })
      return Object.assign(cart_data, merch_data)
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, updateCartDto: UpdateCartDto) {
    try {
      await this.prisma.cart.update({
        where: {
          order_id: id,
        },
        data: updateCartDto,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: number) {
    try {
      
    } catch (error) {
      
    }
  }
}
