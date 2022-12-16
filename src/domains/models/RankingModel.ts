import { RankingEntity } from "../entities/RankingEntity";

export class RankingModel {
    private rankingEntity: RankingEntity;

    /**
     * コンストラクタ
     * @param rankingEntity 
     */
    private constructor(rankingEntity: RankingEntity) {
        this.rankingEntity = rankingEntity;
    }

     /**
      * 返却用のデータ
      * @returns 
      */
    public responseBody() {
        return {
            id: this.rankingEntity.id,
            username: this.rankingEntity.username,
            gamemode: this.rankingEntity.gamemode,
            mass: this.rankingEntity.mass,
            createdAt: this.rankingEntity.createdAt,
            updatedAt: this.rankingEntity.updatedAt,
        }
    }

    /**
     * インスタンス生成
     * @param rankingEntity 
     * @returns 
     */
    public static create(rankingEntity: RankingEntity) {
        return new RankingModel(rankingEntity);
    }
}