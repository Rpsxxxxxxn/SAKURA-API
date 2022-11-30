import { Body, Delete, Get, JsonController, OnUndefined, Param, Post, QueryParams } from "routing-controllers";
import { RankingDto } from './dto/RankingDto';

@JsonController()
export class RankingController {
    /**
     * ランキング全取得
     * @param query 
     * @returns 
     */
    @Get('/rankings')
    @OnUndefined(404)
    getAll(@QueryParams() query: any) {
        console.log(query);
        return `All`;
    }

    /**
     * ランキングの保存・更新
     * @param body 
     * @returns 
     */
    @Post('/rankings')
    post(@Body() body: RankingDto) {
        console.log(body);
        return `post`;
    }

    /**
     * ランキングの個別削除
     * @param id 
     * @returns 
     */
    @Delete('/rankings/:id')
    delete(@Param('id') id: number) {
        console.log(id);
        return ``;
    }
}