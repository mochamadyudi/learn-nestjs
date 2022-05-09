import { Injectable,Header,Get } from '@nestjs/common';

@Injectable()
export class PostService {

    @Get()
    @Header('Content-Type',"text/html")
    getSingle(id): any {
        return "hello"
    }
    getHello(): string {
        return 'Hello World!';
    }
}
