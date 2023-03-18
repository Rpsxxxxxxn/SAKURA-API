import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import path from 'path';
import dotenv from 'dotenv';
import * as admin from 'firebase-admin';
import * as serviceAccount from './serviceAccountKey.json';
dotenv.config();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

const app = createExpressServer({
    cors: true,
    routePrefix: '/api',
    classTransformer: true,
    defaultErrorHandler: false,
    controllers: [path.join(__dirname, '/controllers/*.js')],
    middlewares: [path.join(__dirname, '/shared/middleware/*.js')],
    interceptors: [path.join(__dirname, '/shared/interceptor/*.js')],
});

app.listen(3000);
console.log("listen port: 3000");