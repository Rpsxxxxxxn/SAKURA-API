import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import path from 'path';

const app = createExpressServer({
    routePrefix: '/api',
    classTransformer: true,
    defaultErrorHandler: false,
    controllers: [path.join(__dirname, '/controllers/*.js')],
    middlewares: [path.join(__dirname, '/shared/middleware/*.js')],
    interceptors: [path.join(__dirname, '/shared/interceptor/*.js')],
});

app.listen(3000);