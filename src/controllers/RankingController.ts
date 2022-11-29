import { Body, Delete, Get, JsonController, Param, Post, QueryParams } from "routing-controllers";
import { RankingForm } from './../forms/RankingForm';

@JsonController()
export class RankingController {
    @Get('/rankings')
    getAll(@QueryParams() query: any) {
        console.log(query);
        return `All`;
    }

    @Post('/rankings')
    post(@Body() body: RankingForm) {
        console.log(body);
        return `post`;
    }

    @Delete('/rankings/:id')
    delete(@Param('id') id: number) {
        console.log(id);
        return ``;
    }
}