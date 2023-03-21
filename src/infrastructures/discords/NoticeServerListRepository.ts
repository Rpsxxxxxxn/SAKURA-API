import axios from "axios";
import { ServerListEntity } from "../../domains/entities/ServerListEntity";
import { ServerListModel } from "../../domains/models/ServerListModel";
import IDiscordNoticeServerListRepository from "../../domains/repositories/discords/NoticeServerListRepository";

class NoticeServerListRepository implements IDiscordNoticeServerListRepository {
    private static readonly TOKEN_FORMAT: string = 'https://discord.com/api/v9/channels/?/messages';
    private token: string = '';
    private channelId: string = '';

    constructor(token: string, channelId: string) {
        this.token = token;
        this.channelId = channelId;
    }

    /**
     * サーバー情報の取得
     * @param {ServerListEntity} value
     */
    public async registServerlist(value: ServerListEntity): Promise<void> {
        const serverlistModel = ServerListModel.create(value);
        const sendChannel = new Promise((resolve, reject) => {
            axios.post(NoticeServerListRepository.TOKEN_FORMAT.replace('?', this.channelId), serverlistModel.createDiscordNoticeEmbed(), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bot ${this.token}`
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
        await sendChannel;
    }

    /**
     * インスタンス生成
     * @param {string} token 
     * @param {string} channelId 
     * @returns {DiscordNoticeRepository} DiscordNoticeRepository
     */
    public static create(token: string, channelId: string): IDiscordNoticeServerListRepository {
        return new NoticeServerListRepository(token, channelId);
    }
}

export default NoticeServerListRepository;