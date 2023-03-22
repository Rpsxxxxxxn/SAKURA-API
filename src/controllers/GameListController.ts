import { Response } from "express";
import { Body, Delete, Get, JsonController, OnUndefined, Param, Post, Put, Res, UploadedFile } from "routing-controllers";
import GameListService from "../domains/services/GameListService";
import { ExperienceDto } from './dto/ExperienceDto';

@JsonController('/gamelist')
export class GameListController {
    private gameListService: GameListService = GameListService.create();

    /**
     * 経験値の取得
     * @param response 
     * @returns 
     */
    @Get('/findAll')
    @OnUndefined(404)
    public async findAll(@Res() response: Response) {
    }

    /**
     * 経験値の取得
     * @param id 
     * @param response 
     * @returns 
     */
    @Get('/find/:id')
    @OnUndefined(404)
    public async find(@Param('id') id: number, @Res() response: Response) {
    }

    /**
     * ゲームファイルのアップロード
     * @param body 
     * @returns 
     */
    @Post('/upload')
    public async upload(@UploadedFile('fileName') files: File[], @Res() response: Response) {
        files.forEach(file => {
            console.log(file)
            this.gameListService.saveFile(file.name, file);
        });

        return response.status(200).send('アップロードが完了しました。');
    }

    /**
     * 経験値の更新
     * @param id 
     * @param body 
     * @param response 
     * @returns 
     */
    @Put('/update/:id')
    public async update(@Param('id') id: number, @Body() body: ExperienceDto, @Res() response: Response) {
        return response.status(200).send('更新が完了しました。');
    }

    /**
     * 経験値の削除
     * @param id 
     * @returns 
     */
    @Delete('/remove/:id')
    public async remove(@Param('id') id: number, @Res() response: Response) {
        return response.status(200).send('削除が完了しました。');
    }
}