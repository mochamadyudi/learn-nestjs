import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {UserController} from "./users/user.controller";
import {UserService} from "./users/user.service";

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost:27017/nestjs',{
          connectionName: "nestjs"
      })
  ],
  controllers: [
      AppController,
      UserController,
  ],
  providers: [
      AppService,
      UserService
  ],
})
export class AppModule {}
