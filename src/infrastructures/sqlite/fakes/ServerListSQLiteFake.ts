import { ServerListEntity } from "../../../domains/entities/ServerListEntity";
import IServerListRepository from "../../../domains/repositories/ServerListRepository";

class ServerListSQLiteFake implements IServerListRepository {
    healthCheck(): Promise<void> {
        throw new Error("Method not implemented.");
    }
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
}

export default ServerListSQLiteFake;