export interface IUserAuthorityRepository {
    /**
     * ユーザの全取得
     */
    findAll(): Promise<Array<number>>;

    /**
     * ユーザ検索
     * @param id ユーザID
     */
    find(id: number): Promise<number>;
}