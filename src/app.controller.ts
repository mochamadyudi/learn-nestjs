import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('pages/home.hbs')
  root() {
    return {
      meta: {
        title: "APP - With HBS"
      },
      message: 'Hello world!',
    };
  }
}
