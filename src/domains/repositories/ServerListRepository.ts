import { ServerListEntity } from "../entities/ServerListEntity";

interface IServerListRepository {
    /**
     * サーバリストの取得
     */
    findAll(): Promise<Array<ServerListEntity>>;
    
    /**
     * サーバ検索
     * @param id ID
     */
    find(id: number): Promise<ServerListEntity>;

    /**
     * サーバの追加と更新
     * @param model サーバモデルデータ
     */
    save(model: ServerListEntity): Promise<void>;

    /**
     * サーバの削除
     * @param id ランキングID
     */
    remove(id: number): Promise<void>;

    /**
     * サーバの生存チェック
     */
    healthCheck(): Promise<void>;
}

export default IServerListRepository;