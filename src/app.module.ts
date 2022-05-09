import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {PostController} from './controller/post.controller'
import { AppService } from './app.service';
import { PostService } from './service/post.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost:27017/nestjs')
  ],
  controllers: [
      AppController,
      PostController,
  ],
  providers: [
      AppService,
    PostService
  ],
})
export class AppModule {}
