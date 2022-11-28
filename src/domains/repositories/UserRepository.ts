import { UserEntity } from "../entities/UserEntity";

interface IUserRepository {
    /**
     * 追加と更新を行う
     * @param model ユーザデータ
     */
    save(model: UserEntity): Promise<void>;
    
    /**
     * ユーザの削除を行う
     * @param id 
     */
    remove(id: number): Promise<void>;

    /**
     * ユーザの全取得
     */
    findAll(): Promise<Array<UserEntity>>;

    /**
     * ユーザ検索
     * @param id ユーザID
     */
    find(id: number): Promise<UserEntity>;
}

export default IUserRepository;