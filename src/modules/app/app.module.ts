import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from 'src/config/typeorm.config';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  imports : [TypeOrmModule.forRoot(TypeOrmConfig()),CategoriesModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
