import { Injectable } from '@nestjs/common';
import { CreateBucketDto } from './dto/create-bucket.dto';
import { UpdateBucketDto } from './dto/update-bucket.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class BucketService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateBucketDto) {
    try {
      // Creates the bucket instance
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
      // Collects all bucket data from user_id
      const list_data = await this.prisma.bucket.findMany({
        where: { 
          user_id: id
        }});

      // Collects wiki data from wiki_id
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
      // Collects bucket data from sequential_number
      const list_data = await this.prisma.bucket.findUnique({
        where: { 
          sequential_number: parseInt(id)
        }});

      // Collects wiki data from wiki_id
      const wiki_data = await this.prisma.wiki.findUnique({
        where: { 
          wiki_id: list_data.wiki_id
      }});
      list_data["anime_name"] = wiki_data.anime_name;

      return list_data
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, data: UpdateBucketDto) {
    try {
      // Updates the bucket instance
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
      // Deletes the bucket instance
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
    try{
      // Collects bucket data from user_id and type
      if(type === 'ongoing'){
        const bucket_data = await this.prisma.bucket.findMany({
          where: {
            user_id: id, 
            ongoing: true
          }});
        let result = [];
        for (let i = 0; i < bucket_data.length; i++) {
          const wiki_data = await this.prisma.wiki.findUnique({
            where: { 
              wiki_id: bucket_data[i].wiki_id
          }});
          let res =  Object.assign(wiki_data, bucket_data[i])
          result.push(res)
        }
        return result
      }
      else if(type === 'completed'){
        const bucket_data = await this.prisma.bucket.findMany({
          where: {
            user_id: id, 
            completed: true
          }});
        let result = [];
        for (let i = 0; i < bucket_data.length; i++) {
          const wiki_data = await this.prisma.wiki.findUnique({
            where: { 
              wiki_id: bucket_data[i].wiki_id
          }});
          let res =  Object.assign(wiki_data, bucket_data[i])
          result.push(res)
        }
        return result
      }
      else if(type === 'dropped'){
        const bucket_data = await this.prisma.bucket.findMany({
          where: {
            user_id: id, 
            dropped: true
          }});
        let result = [];
        for (let i = 0; i < bucket_data.length; i++) {
          const wiki_data = await this.prisma.wiki.findUnique({
            where: { 
              wiki_id: bucket_data[i].wiki_id
          }});
          let res =  Object.assign(wiki_data, bucket_data[i])
          result.push(res)
        }
        return result
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}