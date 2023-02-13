import { Reader } from "../../shared/domain/Reader";
import { Writer } from "../../shared/domain/Writer";
import { ServerListEntity } from "../entities/ServerListEntity";

export default interface IServerListRepository extends Reader<number, ServerListEntity>, Writer<number, ServerListEntity> {
    /**
     * サーバの生存チェック
     * @returns {Promise<void>}
     */
    healthCheck(): Promise<void>;
}