import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { WikiModule } from './wiki/wiki.module';
import { SeasonModule } from './season/season.module';
import { BucketModule } from './bucket/bucket.module';
import { ChronicleModule } from './chronicle/chronicle.module';
import { MerchModule } from './merch/merch.module';
import { CartModule } from './cart/cart.module';
import { NexusModule } from './nexus/nexus.module';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [UsersModule, WikiModule, SeasonModule, BucketModule, ChronicleModule, MerchModule, CartModule, NexusModule],
})
export class AppModule {}
