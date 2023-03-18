import { NextFunction } from "express";
import { ExpressErrorMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({ type: "before" })
export class MaintenanceMiddleware implements ExpressErrorMiddlewareInterface {
    /**
     * メンテナンス状態であれば、APIは通せないようにする
     */
    error(error: any, request: Request, response: Response, next: NextFunction): void {
        console.log('do something...');
        next();
    }
}