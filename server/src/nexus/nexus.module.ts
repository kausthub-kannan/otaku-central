import { Module } from '@nestjs/common';
import { NexusService } from './nexus.service';
import { NexusController } from './nexus.controller';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [NexusController],
  providers: [NexusService, PrismaService],
})
export class NexusModule {}
