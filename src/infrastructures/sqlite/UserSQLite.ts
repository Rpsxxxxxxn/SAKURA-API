import {UserEntity} from "../../domains/entities/UserEntity";
import IUserRepository from "../../domains/repositories/UserRepository";
import { Authority } from "../../domains/valueobjects/Authority";
import { Time } from "../../domains/valueobjects/Time";
import { UserName } from "../../domains/valueobjects/UserName";
import SQLiteHelper from "./helper/SQLiteHelper";

class UserSQLite implements IUserRepository {
    public static readonly INSERT_SQL: string = '';
    public static readonly DELETE_SQL: string = '';
    public static readonly ONE_GET_SQL: string = '';
    public static readonly ALL_GET_SQL: string = '';

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
        await SQLiteHelper.execute(UserSQLite.INSERT_SQL, [
            model.id,
            model.username,
            model.authority,
            model.password,
            model.imageUrl,
            Date.now()
        ]);
    }

    /**
     * ユーザの削除を行う
     * @param id 
     */
    public async remove(id: number): Promise<void> {
        if (id < 0) throw new Error('');
        await SQLiteHelper.execute(UserSQLite.DELETE_SQL, id);
    }

    /**
     * ユーザの全取得
     */
    public async findAll(): Promise<UserEntity[]> {
        return await SQLiteHelper.get(UserSQLite.ALL_GET_SQL);
    }

    /**
     * ユーザ検索
     * @param id ユーザID
     */
    public async find(id: number): Promise<UserEntity> {
        if (id < 0) throw new Error('');
        return await SQLiteHelper.get(UserSQLite.ONE_GET_SQL);
    }
}

export default UserSQLite;