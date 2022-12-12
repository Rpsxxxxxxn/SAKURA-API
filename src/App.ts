import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { LoggingMiddleware } from './shared/middleware/LoggingMiddleware';

import { ServerListController } from './controllers/ServerListController';
import { ExperienceController } from './controllers/ExperienceController';
import { RankingController } from './controllers/RankingController';
import { UserController } from './controllers/UserController';
import { PostController } from './controllers/PostController';
import { TestController } from './controllers/TestController';
import { AuthenticateController } from './controllers/AuthenticateController';

const app = createExpressServer({
    routePrefix: '/api',
    classTransformer: true,
    controllers: [
        AuthenticateController,
        ExperienceController,
        RankingController,
        ServerListController,
        UserController,
        PostController,
        TestController,
    ],
    middlewares: [LoggingMiddleware]
});

app.listen(3000);