import { Body, Delete, Get, JsonController, Param, Post, QueryParams } from "routing-controllers";
import { ExperienceDto } from './dto/ExperienceDto';

@JsonController()
export class ExperienceController {
    @Get('/experiences')
    getAll(@QueryParams() query: any) {
        console.log(query);
        return `All`;
    }

    @Post('/experiences')
    post(@Body() body: ExperienceDto) {
        console.log(body);
        return `post`;
    }

    @Delete('/experiences/:id')
    delete(@Param('id') id: number) {
        console.log(id);
        return ``;
    }
}