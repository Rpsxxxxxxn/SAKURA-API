import UserEntity from "../entities/UserEntity";

interface IUserCreateRepository {
    /**
     * 追加と更新を行う
     * @param model ユーザデータ
     */
    save(model: UserEntity): Promise<void>;
}

export default IUserCreateRepository;