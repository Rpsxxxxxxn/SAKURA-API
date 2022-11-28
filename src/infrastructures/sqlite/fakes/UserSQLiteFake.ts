import {UserEntity} from "../../../domains/entities/UserEntity";
import IUserCreateRepository from "../../../domains/repositories/UserRepository";

class UserCreateSQLiteFake implements IUserCreateRepository {

    /**
     * ユーザの削除を行う
     * @param id 
     */
    public remove(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * ユーザの全取得
     */
    public findAll(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * ユーザ検索
     * @param id ユーザID
     */
    public find(id: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

    /**
     * 追加と更新を行う
     * @param model ユーザデータ
     */
    public async save(model: UserEntity): Promise<void> {
        console.log("Add Model");
    }
}

export default UserCreateSQLiteFake;