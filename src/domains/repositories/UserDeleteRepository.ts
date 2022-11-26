interface IUserDeleteRepository {
    /**
     * ユーザの削除を行う
     * @param id 
     */
    remove(id: number): Promise<void>;
}

export default IUserDeleteRepository;