import { RankingEntity } from '../../entities/RankingEntity';
export default interface IDiscordNoticeTopMassRankingRepository {
    /**
     * ランキングの登録を通知
     * @param {RankingEntity} value ランキングデータ
     * @returns {Promise<void>}
     */
    registTopMassRanking(value: RankingEntity): Promise<void>;
}