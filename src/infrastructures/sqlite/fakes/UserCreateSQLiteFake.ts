import UserEntity from "../../../domains/entities/UserEntity";
import IUserCreateRepository from "../../../domains/repositories/UserCreateRepository";

class UserCreateSQLiteFake implements IUserCreateRepository {
    /**
     * 追加と更新を行う
     * @param model ユーザデータ
     */
    public async save(model: UserEntity): Promise<void> {
        console.log("Add Model");
    }
}

export default UserCreateSQLiteFake;