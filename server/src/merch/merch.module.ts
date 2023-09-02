import { Module } from '@nestjs/common';
import { MerchService } from './merch.service';
import { MerchController } from './merch.controller';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [MerchController],
  providers: [MerchService, PrismaService],
})
export class MerchModule {}
