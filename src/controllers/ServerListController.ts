import { Body, Delete, Get, JsonController, Param, Post, QueryParams, UseAfter } from "routing-controllers";
import { ServerListDto } from './dto/ServerListDto';

@JsonController()
export class ServerListController {
    /**
     * サーバリスト全取得
     * @param query 
     * @returns 
     */
    @Get('/serverlist')
    findAll(@QueryParams() query: any) {
        console.log(query);
        return `All`;
    }

    /**
     * サーバ情報の設定
     * @param body ServerListDto
     * @returns 
     */
    @Post('/serverlist')
    post(@Body() body: ServerListDto) {
        console.log(body);
        return `post`;
    }

    /**
     * サーバ情報の削除
     * @param id 
     * @returns 
     */
    @Delete('/serverlist/:id')
    delete(@Param('id') id: number) {
        console.log(id);
        return ``;
    }
}