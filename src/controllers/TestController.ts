import { Request, Response } from "express";
import { Get, JsonController, OnUndefined, Param, Post, Req, Res, UploadedFile } from "routing-controllers";

/**
 * テストコントローラー
 * 適当にテストするためのやつ
 */
@JsonController('/test')
export class TestController {
    private testArray: Array<string> = new Array<string>();

    /**
     * テスト取得
     * @returns 
     */
    @Get('/get')
    public async get() {
        return {
            message: 'message',
            data: this.testArray
        };
    }

    /**
     * 追加
     */
    @Post('/add')
    public async insert() {
        this.testArray.push(`Profile${this.testArray.length}`);
    }

    /**
     * アップロードテスト
     * @param file 
     */
    @Post("/upload")
    public async upload(@UploadedFile("fileName") file: any) {
        console.log(file);
    }

    /**
     * paramの取得
     * @param id 
     */
    @Get('/get/:id')
    public async getId(@Param("id") id: number) {
        console.log(id);
    }

    /**
     * リダイレクト処理
     * @param request 
     * @param response 
     * @returns 
     */
    @Get('/redirect')
    public async redirect(@Req() request: Request, @Res() response: Response) {
        console.log('IP: ' + request.ip);
        response.redirect('/users');
        return response;
    }
}