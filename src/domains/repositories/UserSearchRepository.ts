import UserEntity from "../entities/UserEntity";

interface IUserSearchRepository {
    /**
     * ユーザの全取得
     */
    findAll(): Array<UserEntity>;

    /**
     * ユーザ検索
     * @param id ユーザID
     */
    find(id: number): UserEntity;
}

export default IUserSearchRepository;