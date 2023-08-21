import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [UsersModule],
})
export class AppModule {}
