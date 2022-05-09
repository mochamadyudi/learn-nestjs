import { Controller, Get,Req } from '@nestjs/common';
import {PostService} from "../service/post.service";
import { Request } from 'express';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get(':id')
    index(@Req() request: Request){
        let {id} = request.params
        console.log(id)
        return this.postService.getSingle(id)
    }

    @Get()
    getHello(): string {
        return this.postService.getHello();
    }
}
