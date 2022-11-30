import { Body, Delete, Get, JsonController, Param, Post, QueryParams } from "routing-controllers";
import { ExperienceDto } from './dto/ExperienceDto';

@JsonController()
export class ExperienceController {

    /**
     * 経験値の設定
     * @param body 
     * @returns 
     */
    @Post('/experiences')
    post(@Body() body: ExperienceDto) {
        console.log(body);
        return `post`;
    }

    /**
     * 経験値の削除
     * @param id 
     * @returns 
     */
    @Delete('/experiences/:id')
    delete(@Param('id') id: number) {
        console.log(id);
        return ``;
    }
}