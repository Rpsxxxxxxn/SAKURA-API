import { ServerListEntity } from '../../entities/ServerListEntity';
export default interface IDiscordNoticeServerListRepository {
    /**
     * サーバー情報の登録を通知
     */
    registServerlist(value: ServerListEntity): Promise<void>;
}