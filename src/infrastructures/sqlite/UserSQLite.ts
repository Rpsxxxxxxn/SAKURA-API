import { Time } from './../../domains/valueobjects/Time';
import { UserName } from './../../domains/valueobjects/UserName';
import {UserEntity} from "../../domains/entities/UserEntity";
import IUserRepository from "../../domains/repositories/UserRepository";
import UserCreateSQLiteFake from "./fakes/UserSQLiteFake";
import SQLiteHelper from "./helper/SQLiteHelper";
import { Authority } from '../../domains/valueobjects/Authority';

class UserSQLite implements IUserRepository {
    public static readonly INSERT_SQL: string = 'INSERT INTO sakura_users(username, authority, password, imageUrl) VALUES(?, ?, ?, ?);';
    public static readonly DELETE_SQL: string = 'DELETE sakura_users WHERE id=?;';
    public static readonly UPDATE_SQL: string = 'UPDATE sakura_users SET username=?, password=?, imageUrl=? WHERE id=?;'
    public static readonly ONE_GET_SQL: string = 'SELECT * FROM sakura_users WHERE id=?;';
    public static readonly ALL_GET_SQL: string = 'SELECT * FROM sakura_users;';

    /**
     * 追加を行う
     * @param model ユーザデータ
     */
    public async insert(model: UserEntity): Promise<void> {
        await SQLiteHelper.execute(UserSQLite.INSERT_SQL, [
            model.username,
            model.authority,
            model.password,
            model.imageUrl,
        ]);
    }

    /**
     * 更新を行う
     * @param model ユーザデータ
     */
    public async update(model: UserEntity): Promise<void> {
        await SQLiteHelper.execute(UserSQLite.UPDATE_SQL, [
            model.username,
            model.authority,
            model.password,
            model.imageUrl,
        ]);
    }

    /**
     * ユーザの削除を行う
     * @param id 
     */
    public async remove(id: number): Promise<void> {
        if (id < 0) throw new Error('IDが正常ではありません。');
        await SQLiteHelper.execute(UserSQLite.DELETE_SQL, id);
    }

    /**
     * ユーザの全取得
     */
    public async findAll(): Promise<UserEntity[]> {
        const datalist: Array<any> = await SQLiteHelper.get(UserSQLite.ALL_GET_SQL);
        const result: Array<UserEntity> = new Array<UserEntity>();
        if (!datalist) return result;
        for (const data of datalist) {
            const rankingEntity = UserEntity.create(
                data.id, {
                username: UserName.create({ name: data.username }),
                authority: Authority.create({ value: data.authority }),
                email: data.email,
                password: data.password,
                imageUrl: data.image_url,
                createdAt: Time.create({date: data.created_at}),
                updatedAt: Time.create({date: data.updated_at}),
            });
            result.push(rankingEntity);
        }
        return result;
    }

    /**
     * ユーザ検索
     * @param id ユーザID
     */
    public async find(id: number): Promise<UserEntity> {
        if (id < 0) throw new Error('IDが正常ではありません。');
        const data: any = await SQLiteHelper.get(UserSQLite.ONE_GET_SQL, [id]);
        const result: UserEntity = UserEntity.create(
            data.id, {
            username: UserName.create({ name: data.username }),
            authority: Authority.create({ value: data.authority }),
            email: data.email,
            password: data.password,
            imageUrl: data.image_url,
            createdAt: Time.create({date: data.created_at}),
            updatedAt: Time.create({date: data.updated_at}),
        });
        return result;
    }

    /**
     * インスタンス生成
     * @returns 
     */
    public static create(): IUserRepository {
        return process.env.NODE_ENV === 'prd' ? new UserSQLite() : new UserCreateSQLiteFake();
    }
}

export default UserSQLite;