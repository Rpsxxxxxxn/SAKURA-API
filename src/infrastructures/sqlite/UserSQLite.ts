import { UserEntity } from "../../domains/entities/UserEntity";
import IUserRepository from "../../domains/repositories/UserRepository";
import { Time } from './../../domains/valueobjects/Time';
import { UserName } from './../../domains/valueobjects/UserName';
import UserCreateSQLiteFake from "./fakes/UserSQLiteFake";
import SQLiteHelper from "./helper/SQLiteHelper";

class UserSQLite implements IUserRepository {
    public static readonly INSERT_SQL: string = 'INSERT INTO sakura_user(uid, username, profileImageURL) VALUES(?, ?, ?);';
    public static readonly UPDATE_SQL: string = 'UPDATE sakura_user SET username=?, profileImageURL=? WHERE id=?;'
    public static readonly DELETE_SQL: string = 'DELETE sakura_user WHERE id=?;';
    public static readonly ALL_SQL: string = 'SELECT * FROM sakura_user;';
    public static readonly ONE_SQL: string = 'SELECT * FROM sakura_user WHERE id=?;';
    public static readonly ONE_UID_SQL: string = 'SELECT * FROM sakura_user WHERE uid=?;';

    /**
     * 追加を行う
     * @param {UserEntity} model ユーザデータ
     */
    public async insert(model: UserEntity): Promise<void> {
        await SQLiteHelper.execute(UserSQLite.INSERT_SQL,
            model.uid,
            model.username,
            model.profileImageURL,
        );
    }

    /**
     * 更新を行う
     * @param {UserEntity} model ユーザデータ
     */
    public async update(model: UserEntity): Promise<void> {
        await SQLiteHelper.execute(UserSQLite.UPDATE_SQL,
            model.username,
            model.profileImageURL,
            model.id,
        );
    }

    /**
     * ユーザの削除を行う
     * @param {number} id
     */
    public async remove(id: number): Promise<void> {
        if (id < 0) {
            throw new Error('IDが正常ではありません。');
        }
        await SQLiteHelper.execute(UserSQLite.DELETE_SQL, id);
    }

    /**
     * ユーザの全取得
     * @returns {Promise<UserEntity[]>} ユーザ情報配列
     */
    public async findAll(): Promise<UserEntity[]> {
        const userSQLiteList: Array<any> = await SQLiteHelper.all(UserSQLite.ALL_SQL, []);
        const userEntityList: Array<UserEntity> = new Array<UserEntity>();
        if (!userSQLiteList) {
            return userEntityList;
        }
        userSQLiteList.forEach((user: any) => {
            const rankingEntity = UserEntity.create(user.id, {
                uid: user.uid,
                username: UserName.create({ name: user.username }),
                profileImageURL: user.profileImageURL,
                createdAt: Time.create({value: user.created_at}),
                updatedAt: Time.create({value: user.updated_at})
            });
            userEntityList.push(rankingEntity);
        });
        return userEntityList;
    }

    /**
     * ユーザ検索
     * @param id ユーザID
     * @returns {Promise<UserEntity>} ユーザ情報
     */
    public async find(id: number): Promise<UserEntity> {
        if (id < 0) {
            throw new Error('IDが正常ではありません。');
        }
        const user: any = await SQLiteHelper.get(UserSQLite.ONE_SQL, [id]);
        const userEntity: UserEntity = UserEntity.create(user.id, {
            uid: user.uid,
            username: UserName.create({ name: user.username }),
            profileImageURL: user.profileImageURL,
            createdAt: Time.create({value: user.created_at}),
            updatedAt: Time.create({value: user.updated_at})
        });
        return userEntity;
    }

    /**
     * ユーザ検索
     * @param uid 
     * @returns 
     */
    public async findUserIdByUid(uid: string): Promise<UserEntity> {
        const user: any = await SQLiteHelper.get(UserSQLite.ONE_UID_SQL, [uid]);
        const userEntity: UserEntity = UserEntity.create(user.id, {
            uid: user.uid,
            username: UserName.create({ name: user.username }),
            profileImageURL: user.profileImageURL,
            createdAt: Time.create({value: user.created_at}),
            updatedAt: Time.create({value: user.updated_at})
        });
        return userEntity;
    }

    /**
     * インスタンス生成
     * @returns {IUserRepository}
     */
    public static create(): IUserRepository {
        return process.env.NODE_ENV === 'prd' ? new UserSQLite() : new UserCreateSQLiteFake();
    }
}

export default UserSQLite;