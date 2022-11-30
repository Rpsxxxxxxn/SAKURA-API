import { RankingController } from './controllers/RankingController';
import { ServerListController } from './controllers/ServerListController';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { ExperienceController } from './controllers/ExperienceController';

// Controller
import { UserController } from './controllers/UserController';
import { LoggingMiddleware } from './shared/middleware/LoggingMiddleware';

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