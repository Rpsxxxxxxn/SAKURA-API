import { Body, Delete, Get, JsonController, Param, Post, QueryParams } from "routing-controllers";
import { ServerListForm } from './../forms/ServerListForm';

@JsonController()
export class ServerListController {
    @Get('/serverlist')
    getAll(@QueryParams() query: any) {
        console.log(query);
        return `All`;
    }

    @Post('/serverlist')
    post(@Body() body: ServerListForm) {
        console.log(body);
        return `post`;
    }

    @Delete('/serverlist/:id')
    delete(@Param('id') id: number) {
        console.log(id);
        return ``;
    }
}