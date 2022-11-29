import express from 'express';
import { RankingEntity } from './domains/entities/RankingEntity';
import { UserEntity } from './domains/entities/UserEntity';
import { UserType } from './domains/models/UserType';
import IRankingRepository from './domains/repositories/RankingRepository';
import IUserCreateRepository from './domains/repositories/UserRepository';
import { Authority } from './domains/valueobjects/Authority';
import { Time } from './domains/valueobjects/Time';
import { UserName } from './domains/valueobjects/UserName';
import RankingSQLiteFake from './infrastructures/sqlite/fakes/RankingSQLiteFake';
import RankingSQLite from './infrastructures/sqlite/RankingSQLite';
import UserCreateSQLite from './infrastructures/sqlite/UserSQLite';

const app: express.Express = express();
app.listen(3000, () => { console.log('Start listen: http://localhost:3000') })

/**
 * トップページ
 */
app.get('/', async (req: express.Request, res: express.Response) => {
    res.status(200).send('<h1>Hello World!!</h1>')
})

/**
 * ランキングの追加
 */
app.post('/ranking/new', async (req: express.Request, res: express.Response) => {
    try {
        const rankingEntity: RankingEntity = req.body;
        const rankingRepository: IRankingRepository = new RankingSQLiteFake();
        await rankingRepository.save(rankingEntity);
        res.status(200).send(`OK`);
    } catch (error) {
        res.status(500).send(`ERROR: ${error}`);
    }
})

/**
 * ランキングの取得
 */
app.get('/ranking/getAll', async (req: express.Request, res: express.Response) => {
    try {
        const rankingRepository: IRankingRepository = new RankingSQLite();
        const datalist: RankingEntity[] = await rankingRepository.findAll();
        res.status(200).send(datalist);
    } catch (error) {
        console.log(error);
        res.status(500).send(`ERROR: ${error}`);
    }
})

/**
 * ユーザの作成・更新
 */
 app.post('/user/save', async (req: express.Request, res: express.Response) => {
    try {
        const userCreateRepository: IUserCreateRepository = new UserCreateSQLite();
        await userCreateRepository.save(UserEntity.create('0', {
            username: UserName.create({ name: '' }),
            authority: Authority.create({ value: UserType.NORMAL }),
            email: '',
            password: '',
            imageUrl: '',
            createdAt: Time.create({ date: '' }),
            updatedAt: Time.create({ date: '' }),
        }));
        res.status(200).send('OK');
    } catch (error) {
        res.status(500).send(`ERROR: ${error}`);
    }
})

/**
 * ユーザの削除
 */
 app.post('/user/remove/:id', async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).send('OK');
    } catch (error) {
        res.status(500).send(`ERROR: ${error}`);
    }
})

/**
 * ユーザの作成
 */
 app.get('/user/find/:id', async (req: express.Request, res: express.Response) => {
    try {
        res.status(200).send('OK');
    } catch (error) {
        res.status(500).send(`ERROR: ${error}`);
    }
})