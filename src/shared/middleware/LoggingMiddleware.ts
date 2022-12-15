import { Request } from "express";
import { ExpressErrorMiddlewareInterface, ExpressMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({ type: "after" })
export class LoggingMiddleware implements ExpressMiddlewareInterface {
    /**
     * ログ詳細記録用
     * @param request 
     * @param response 
     * @param next 
     */
    use(request: any, response: any, next: (err?: any) => any) {
        console.log(`rowHeaders: ${request.rawHeaders}`);
        console.log(`IPAddress: ${request.ip}`);
        console.log(`body: ${request.body}`);
        console.log(`url: ${request.url}`);
        next();
    }

    // /**
    //  * ログ詳細記録用
    //  * @param request 
    //  * @param response 
    //  * @param next 
    //  */
    // error(error: any, request: Request, response: Response, next: (err?: any) => any) {
    //     console.log(`rowHeaders: ${request.rawHeaders}`);
    //     console.log(`IPAddress: ${request.ip}`);
    //     console.log(`body: ${request.body}`);
    //     console.log(`url: ${request.url}`)
    //     console.log(error);
    //     console.log('システムエラーが発生しました。');
    //     next();
    // }
}