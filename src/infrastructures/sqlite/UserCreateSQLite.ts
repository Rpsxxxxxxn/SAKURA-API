import UserEntity from "../../domains/entities/UserEntity";
import IUserCreateRepository from "../../domains/repositories/UserCreateRepository";
import SQLiteHelper from "./helper/SQLiteHelper";

class UserCreateSQLite implements IUserCreateRepository {
    public static readonly INSERT_SQL: string = '';

    /**
     * 追加と更新を行う
     * @param model ユーザデータ
     */
    public async save(model: UserEntity): Promise<void> {
        const user = new UserEntity(0);
        await SQLiteHelper.execute(UserCreateSQLite.INSERT_SQL, user);
    }
}

export default UserCreateSQLite;