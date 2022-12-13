import { Body, Delete, Get, JsonController, OnUndefined, Param, Post, QueryParams, UseAfter } from "routing-controllers";
import { ServerListEntity } from "../domains/entities/ServerListEntity";
import IServerListRepository from "../domains/repositories/ServerListRepository";
import ServerListSQLite from "../infrastructures/sqlite/ServerListSQLite";
import { ServerListDto } from './dto/ServerListDto';

@JsonController()
export class ServerListController {
    private serverlistRepository: IServerListRepository = ServerListSQLite.create();

    /**
     * サーバリスト全取得
     * @param query 
     * @returns 
     */
    @Get('/serverlist')
    @OnUndefined(404)
    public async findAll(@QueryParams() query: any) {
        return await this.serverlistRepository.findAll();
    }

    /**
     * サーバ情報の設定
     * @param body ServerListDto
     * @returns 
     */
    @Post('/serverlist')
    public async post(@Body() body: ServerListDto) {
        console.log(body);
        const serverlistEntity: ServerListEntity = ServerListEntity.create(0, {
            name: body.name,
            detail: body.detail,
            no: 0,
            address: body.address,
            port: body.port,
        })
        this.serverlistRepository.insert(serverlistEntity)
        return {};
    }

    /**
     * サーバ情報の削除
     * @param id 
     * @returns 
     */
    @Delete('/serverlist/:id')
    public async delete(@Param('id') id: number) {
        console.log(id);
        await this.serverlistRepository.remove(id);
        return {};
    }

    @Get('/serverlist/healthCheck')
    public async healthCheck() {
        return {};
    }
}