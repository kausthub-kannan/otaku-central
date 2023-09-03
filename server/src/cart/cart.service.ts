import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async create(createCartDto: CreateCartDto) {
    try {
      // Creates the cart instance
      await this.prisma.cart.create({
        data: createCartDto,
      });
      return {
        statusCode: 201,
        message: 'Cart Item Created',
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(id: string) {
    try {
      // Collects all cart data from user_id
      const cart_data = await this.prisma.cart.findMany({
        where: {
          user_id: id,
        }
      });
      
      // Collects merch data from merch_id
      let result = []
      for (let i = 0; i < cart_data.length; i++) {
        const element = cart_data[i];
        const item_data = await this.prisma.merch.findUnique({
          where: {
            merch_id: element.merch_id,
          }
        })

        // Adds item data to cart data
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
      // Collects cart data from order_id
      const cart_data= await this.prisma.cart.findUnique({
        where: {
          order_id: id,
        },
      });

      // Collects merch data from merch_id
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
      // Updates the cart instance
      await this.prisma.cart.update({
        where: {
          order_id: id,
        },
        data: updateCartDto,
      });
      return {
        statusCode: 200,
        message: 'Cart Item Updated',
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try {
      // Deletes the cart instance
      await this.prisma.cart.delete({
        where: {
          order_id: id,
        },
      });
      return {
        statusCode: 204,
        message: 'Cart Item Deleted',
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
