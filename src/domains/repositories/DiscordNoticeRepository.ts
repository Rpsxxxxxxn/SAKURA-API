import { RankingEntity } from './../entities/RankingEntity';
export default interface IDiscordNoticeRepository {
    /**
     * ランキングの登録を通知
     * @param {RankingEntity} value ランキングデータ
     * @returns {Promise<void>}
     */
    registRanking(value: RankingEntity): Promise<void>;
}