import { RankingController } from './controllers/RankingController';
import { ServerListController } from './controllers/ServerListController';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { ExperienceController } from './controllers/ExperienceController';

// Controller
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
});

app.listen(3000);