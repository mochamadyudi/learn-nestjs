import {Controller, Get, Post, Render} from '@nestjs/common';
import {UserService} from "./user.service";

@Controller("/user")
export class UserController{
    constructor(private readonly userService: UserService) {
    }

    @Get()
    @Render('pages/users.hbs')
    index(): any {
        return {
            meta: {
                title: "APP - With HBS"
            },
            message: 'Hello world!',
        };
    }


    @Get(":id")
    @Render('pages/users.hbs')
    root() {
        return {
            meta: {
                title: "APP - With HBS"
            },
            message: 'Hello world!',
        };
    }
}
