import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

@Middleware({ type: "before" })
export class MaintenanceMiddleware implements ExpressMiddlewareInterface {
    /**
     * メンテナンス状態であれば、APIは通せない
     * @param request 
     * @param response 
     * @param next 
     */
    use(request: any, response: any, next: (err?: any) => any) {
        console.log('do something...');
        next();
    }
}