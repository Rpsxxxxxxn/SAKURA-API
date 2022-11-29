import {UserEntity} from "../../domains/entities/UserEntity";
import IUserRepository from "../../domains/repositories/UserRepository";
import SQLiteHelper from "./helper/SQLiteHelper";

class UserSQLite implements IUserRepository {
    public static readonly INSERT_SQL: string = '';

    /**
     * 追加と更新を行う
     * @param model ユーザデータ
     */
    public async save(model: UserEntity): Promise<void> {
        const user = UserEntity.create(`0`, {
            username: '',
            email: '',
            password: '',
            imageUrl: '',
            createdAt: '',
            updatedAt: '',
        });
        await SQLiteHelper.execute(UserSQLite.INSERT_SQL, user);
    }

    /**
     * ユーザの削除を行う
     * @param id 
     */
    public async remove(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * ユーザの全取得
     */
    public async findAll(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * ユーザ検索
     * @param id ユーザID
     */
    public async find(id: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
}

export default UserSQLite;