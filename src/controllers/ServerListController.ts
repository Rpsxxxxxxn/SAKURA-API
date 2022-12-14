import { Body, Delete, Get, JsonController, OnUndefined, Param, Patch, Post, QueryParams, UseAfter } from "routing-controllers";
import { ServerListEntity } from "../domains/entities/ServerListEntity";
import IServerListRepository from "../domains/repositories/ServerListRepository";
import ServerListSQLite from "../infrastructures/sqlite/ServerListSQLite";
import { ServerListDto } from './dto/ServerListDto';

@JsonController('/serverlist')
export class ServerListController {
    private serverlistRepository: IServerListRepository = ServerListSQLite.create();

    /**
     * サーバリスト全取得
     * @param query 
     * @returns ServerListEntity[]
     */
    @Get('/all')
    @OnUndefined(404)
    public async findAll(@QueryParams() query: any) {
        return await this.serverlistRepository.findAll();
    }

    /**
     * サーバ情報の設定
     * @param body ServerListDto
     * @returns 
     */
    @Post('/add')
    public async insert(@Body() body: ServerListDto) {
        const serverlistEntity: ServerListEntity = ServerListEntity.create(0, {
            name: body.name,
            detail: body.detail,
            no: 0,
            address: body.address,
            port: body.port,
        })
        await this.serverlistRepository.insert(serverlistEntity)
        return {};
    }

    /**
     * サーバ情報の更新
     * @param id 
     * @param body 
     * @returns 
     */
    @Post('/update/:id')
    public async update(@Param('id') id: number, @Body() body: ServerListDto) {
        const serverlistEntity: ServerListEntity = ServerListEntity.create(id, {
            name: body.name,
            detail: body.detail,
            no: 0,
            address: body.address,
            port: body.port,
        })
        await this.serverlistRepository.update(serverlistEntity);
        return {};
    }

    /**
     * サーバ情報の削除
     * @param id 
     * @returns 
     */
    @Delete('/delete/:id')
    public async delete(@Param('id') id: number) {
        console.log(id);
        await this.serverlistRepository.remove(id);
        return {};
    }

    /**
     * サーバの稼働状況の確認
     * @returns 
     */
    @Get('/healthCheck')
    public async healthCheck() {
        return {};
    }
}