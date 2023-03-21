import axios from "axios";
import { RankingEntity } from "../../domains/entities/RankingEntity";
import { TopMassRankingModel } from "../../domains/models/TopMassRankingModel";
import IDiscordNoticeTopMassRankingRepository from "../../domains/repositories/discords/NoticeTopMassRepository";

class NoticeTopMassRepository implements IDiscordNoticeTopMassRankingRepository {
    private static readonly TOKEN_FORMAT: string = 'https://discord.com/api/v9/channels/?/messages';
    private token: string = '';
    private channelId: string = '';

    constructor(token: string, channelId: string) {
        this.token = token;
        this.channelId = channelId;
    }

    /**
     * ランキングの登録
     * @param {RankingEntity} value 
     */
    public async registTopMassRanking(value: RankingEntity): Promise<void> {
        const rankingModel = TopMassRankingModel.create(value);
        const sendChannel = new Promise((resolve, reject) => {
            axios.post(NoticeTopMassRepository.TOKEN_FORMAT.replace('?', this.channelId), rankingModel.createDiscordNoticeEmbed(), {
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
    public static create(token: string, channelId: string): IDiscordNoticeTopMassRankingRepository {
        return new NoticeTopMassRepository(token, channelId);
    }
}

export default NoticeTopMassRepository;