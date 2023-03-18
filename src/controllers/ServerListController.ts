import { Response } from "express";
import { Body, Delete, Get, JsonController, OnUndefined, Param, Post, Res } from "routing-controllers";
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
    @Get('/findAll')
    @OnUndefined(404)
    public async findAll(@Res() response: Response) {
        const serverlistEntityList: Array<ServerListEntity> = await this.serverlistRepository.findAll();
        if (!serverlistEntityList) {
            return response.status(404).send('サーバーが見つかりませんでした。');
        }
        return response.status(200).send(serverlistEntityList);
    }

    /**
     * サーバ情報の設定
     * @param body ServerListDto
     * @returns 
     */
    @Post('/insert')
    public async insert(@Body() body: ServerListDto, @Res() response: Response) {
        const serverlistEntity: ServerListEntity = ServerListEntity.create(0, {
            name: body.name,
            detail: body.detail,
            gamemode: body.gamemode,
            address: body.address,
            port: body.port,
            healthCheck: false
        })
        await this.serverlistRepository.insert(serverlistEntity)
        return response.status(200).send(body);
    }

    /**
     * サーバ情報の更新
     * @param id 
     * @param body 
     * @returns 
     */
    @Post('/update/:id')
    public async update(@Param('id') id: number, @Body() body: ServerListDto, @Res() response: Response) {
        const serverlistEntity: ServerListEntity = ServerListEntity.create(id, {
            name: body.name,
            detail: body.detail,
            gamemode: body.gamemode,
            address: body.address,
            port: body.port,
            healthCheck: false
        })
        await this.serverlistRepository.update(serverlistEntity);
        return response.status(200).send(body);
    }

    /**
     * サーバ情報の削除
     * @param id 
     * @returns 
     */
    @Delete('/remove/:id')
    public async remove(@Param('id') id: number, @Res() response: Response) {
        await this.serverlistRepository.remove(id);
        return response.status(200).send('削除が完了しました。');
    }

    /**
     * サーバの稼働状況の確認
     * @returns 
     */
    @Get('/healthCheck')
    public async healthCheck(@Res() response: Response) {
        return response.status(200).send('ヘルスチェックが完了しました。');
    }
}