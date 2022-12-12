import { Request, Response } from "express";
import { Get, JsonController, OnUndefined, Param, Post, Req, Res, UploadedFile } from "routing-controllers";

/**
 * テストコントローラー
 * 適当にテストするためのやつ
 */
@JsonController()
export class TestController {
    /**
     * テスト取得
     * @returns 
     */
    @Get('/tests')
    @OnUndefined(404)
    async tests() {
        return { message: 'message' };
    }

    /**
     * アップロードテスト
     * @param file 
     */
    @Post("/test/upload")
    async upload(@UploadedFile("fileName") file: any) {
        console.log(file);
    }

    /**
     * paramの取得
     * @param id 
     */
    @Get('/test/:id')
    async getId(@Param("id") id: number) {
        console.log(id);
    }

    /**
     * リダイレクト処理
     * @param request 
     * @param response 
     * @returns 
     */
    @Get('/test/redirect')
    async redirect(@Req() request: Request, @Res() response: Response) {
        console.log('IP: ' + request.ip);
        response.redirect('/users');
        return response;
    }
}