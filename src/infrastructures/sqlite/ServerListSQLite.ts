import { ServerListEntity } from '../../domains/entities/ServerListEntity';
import IServerListRepository from '../../domains/repositories/ServerListRepository';
import ServerListSQLiteFake from './fakes/ServerListSQLiteFake';
import SQLiteHelper from './helper/SQLiteHelper';

class ServerListSQLite implements IServerListRepository {
    public static readonly INSERT_SQL: string = 'INSERT INTO sakura_serverlist(name, detail, no, address, port) VALUES(?, ?, ?, ?);';
    public static readonly DELETE_SQL: string = 'DELETE sakura_serverlist WHERE id=?;';
    public static readonly UPDATE_SQL: string = 'UPDATE sakura_serverlist SET name=?, detail=?, address=?, port=? WHERE id=?;'
    public static readonly ONE_GET_SQL: string = 'SELECT * FROM sakura_serverlist WHERE id=?;';
    public static readonly ALL_GET_SQL: string = 'SELECT * FROM sakura_serverlist;';

    /**
     * サーバ情報の全件取得
     * @returns 
     */
    public async findAll(): Promise<ServerListEntity[]> {
        return await SQLiteHelper.all(ServerListSQLite.ALL_GET_SQL, []);
    }

    /**
     * サーバ情報の一件取得
     * @param id 
     * @returns 
     */
    public async find(id: number): Promise<ServerListEntity> {
        return await SQLiteHelper.get(ServerListSQLite.ONE_GET_SQL, [id]);
    }

    /**
     * サーバ情報の設定
     * @param value 
     */
    public async insert(value: ServerListEntity): Promise<void> {
        await SQLiteHelper.execute(ServerListSQLite.INSERT_SQL, [
            value.name,
            value.detail,
            value.no,
            value.address,
            value.port
        ]);
    }

    /**
     * サーバ情報の更新
     * @param value 
     */
    public async update(value: ServerListEntity): Promise<void> {
        await SQLiteHelper.execute(ServerListSQLite.UPDATE_SQL, [
            value.name,
            value.detail,
            value.no,
            value.address,
            value.port
        ])
    }

    /**
     * サーバの削除
     * @param id 
     */
    public async remove(id: number): Promise<void> {
        await SQLiteHelper.execute(ServerListSQLite.DELETE_SQL, [id]);
    }

    /**
     * サーバー正常確認
     */
    public async healthCheck(): Promise<void> {
        const serverList = await this.findAll();
        const newServerList: ServerListEntity[] = [];
        serverList.forEach(async (server) => {
            const isConnected = await this.checkWebsocketConnect(server.address, server.port);
            newServerList.push(ServerListEntity.create(server.id, {
                name: server.name,
                detail: server.detail,
                no: server.no,
                address: server.address,
                port: server.port,
                healthCheck: isConnected
            }));
        });
        console.log(newServerList);
    }

    /**
     * サーバーの正常確認
     * @param address 
     * @param port 
     * @returns 
     */
    private async checkWebsocketConnect(address: string, port: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const webSocket = new WebSocket(`ws://${address}:${port}`);
            webSocket.onopen = () => {
                webSocket.close();
                resolve(true);
            }
            webSocket.onerror = () => {
                webSocket.close();
                resolve(false);
            }
        });
    }

    /**
     * インスタンス生成
     * @returns 
     */
     public static create(): IServerListRepository {
        return process.env.NODE_ENV === 'prd' ? new ServerListSQLite() : new ServerListSQLiteFake();
    }
}

export default ServerListSQLite;