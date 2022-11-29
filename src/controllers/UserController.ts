import { Body, Delete, Get, JsonController, Param, Post, QueryParams } from "routing-controllers";
import { UserForm } from './../forms/UserForm';

@JsonController()
export class UserController {
    @Get('/users')
    getAll(@QueryParams() query: any) {
        console.log(query);
        return `All`;
    }

    @Post('/users')
    post(@Body() body: UserForm) {
        console.log(body);
        return `post`;
    }

    @Delete('/users/:id')
    delete(@Param('id') id: number) {
        console.log(id);
        return ``;
    }
}