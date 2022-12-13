import { ServerListEntity } from '../../domains/entities/ServerListEntity';
import IServerListRepository from '../../domains/repositories/ServerListRepository';
import ServerListSQLiteFake from './fakes/ServerListSQLiteFake';

class ServerListSQLite implements IServerListRepository {
    findAll(): Promise<ServerListEntity[]> {
        throw new Error("Method not implemented.");
    }
    find(id: number): Promise<ServerListEntity> {
        throw new Error("Method not implemented.");
    }
    insert(value: ServerListEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(value: ServerListEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    remove(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    healthCheck(): Promise<void> {
        throw new Error('Method not implemented.');
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