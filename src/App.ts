import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { LoggingMiddleware } from './shared/middleware/LoggingMiddleware';

import { ServerListController } from './controllers/ServerListController';
import { ExperienceController } from './controllers/ExperienceController';
import { RankingController } from './controllers/RankingController';
import { UserController } from './controllers/UserController';

const app = createExpressServer({
    routePrefix: '/api',
    classTransformer: true,
    controllers: [
        ExperienceController,
        RankingController,
        ServerListController,
        UserController,
    ],
    middlewares: [LoggingMiddleware]
});

app.listen(3000);