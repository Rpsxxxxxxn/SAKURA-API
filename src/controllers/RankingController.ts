import { Body, Delete, Get, JsonController, Param, Post, QueryParams, UseAfter } from "routing-controllers";
import { LoggingMiddleware } from "../shared/middleware/LoggingMiddleware";
import { RankingDto } from './dto/RankingDto';

@JsonController()
export class RankingController {
    @Get('/rankings')
    getAll(@QueryParams() query: any) {
        console.log(query);
        return `All`;
    }

    @Post('/rankings')
    post(@Body() body: RankingDto) {
        console.log(body);
        return `post`;
    }

    @Delete('/rankings/:id')
    delete(@Param('id') id: number) {
        console.log(id);
        return ``;
    }
}