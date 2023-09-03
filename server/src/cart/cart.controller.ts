import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  /*Body:
    user_id: string
    merch_id: string
    status: string*/
  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  /*Params:
    user_id: user_id*/
  @Get('all/:id')
  findAll(@Param('id') id: string) {
    return this.cartService.findAll(id);
  }

  /*Params:
    id: order_id (refers to cart table primary key)*/
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(id);
  }

  /*Params:
    id: order_id (refers to cart table primary key)*/
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(id, updateCartDto);
  }

  /*Params:
    id: order_id (refers to cart table primary key)*/
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(id);
  }
}
