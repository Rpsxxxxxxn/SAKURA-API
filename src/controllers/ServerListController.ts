import { Body, Delete, Get, JsonController, Param, Post, QueryParams, UseAfter } from "routing-controllers";
import { LoggingMiddleware } from "../shared/middleware/LoggingMiddleware";
import { ServerListDto } from './dto/ServerListDto';

@JsonController()
export class ServerListController {
    @Get('/serverlist')
    getAll(@QueryParams() query: any) {
        console.log(query);
        return `All`;
    }

    @Post('/serverlist')
    post(@Body() body: ServerListDto) {
        console.log(body);
        return `post`;
    }

    @Delete('/serverlist/:id')
    delete(@Param('id') id: number) {
        console.log(id);
        return ``;
    }
}