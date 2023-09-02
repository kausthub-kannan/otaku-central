import { Injectable } from '@nestjs/common';
import { CreateBucketDto } from './dto/create-bucket.dto';
import { UpdateBucketDto } from './dto/update-bucket.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class BucketService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateBucketDto) {
    try {
      await this.prisma.wiki.create({
        data,
      });
      return {
        tatus: 201,
        message: 'Added to Bucket',
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll(id: string) {
    try {
      const list_data = await this.prisma.bucket.findMany({
        where: { 
          user_id: id
        }});
      let result = [];
      for (let i = 0; i < list_data.length; i++) {
        const wiki_data = await this.prisma.wiki.findUnique({
          where: { 
            wiki_id: list_data[i].wiki_id
        }});
        let res =  Object.assign(wiki_data, list_data[i])
        result.push(res)
      }
      return result
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    try {
      const list_data = await this.prisma.bucket.findUnique({
        where: { 
          sequential_number: parseInt(id)
        }});
      const wiki_data = await this.prisma.wiki.findUnique({
        where: { 
          wiki_id: list_data.wiki_id
      }});
      return { wiki_data: wiki_data.anime_name, status_data: list_data };
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, data: UpdateBucketDto) {
    try {
      await this.prisma.bucket.updateMany({
        where: {
          sequential_number: parseInt(id),
        },
        data: data,
      });
      return {
        status: 100,
        message: 'Bucket Updated',
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.bucket.delete({
        where: {
          sequential_number: id,
        },
      });
      return {
        status: 204,
        message: 'Bucket Deleted',
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async request(id: string, type: string) {
    console.log(type)
    try{
      if(type === 'ongoing')
        return this.prisma.bucket.findMany({
          where: {
            user_id: id, 
            ongoing: true
          }});
      else if(type === 'completed'){
        console.log(type)
        return this.prisma.bucket.findMany({
          where: {
            user_id: id, 
            completed: true
          }});
      }
      else if(type === 'dropped')
        return this.prisma.bucket.findMany({
            where: {
              user_id: id, 
              dropped: true
            }});
    } catch (error) {
      throw new Error(error);
    }
  }
}