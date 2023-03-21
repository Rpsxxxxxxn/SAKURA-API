import { RankingEntity } from "../entities/RankingEntity";

export class TopMassRankingModel {
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
     * Discord通知用のデータ
     * @returns 
     */
    public createDiscordNoticeEmbed() {
        return {
            embeds: [{
                title: 'SakuraAgar-Ranking',
                url: 'http://sakuragame.starfree.jp/',
                description: 'ランキングに登録されました。',
                fields: [
                    {
                        name: 'Gamemode',
                        value: this.rankingEntity.gamemode,
                        inline: true
                    },
                    {
                        name: 'Username',
                        value: this.rankingEntity.username,
                        inline: true
                    },
                    {
                        name: 'Mass',
                        value: String(this.rankingEntity.mass),
                        inline: true
                    }
                ]
            }]
        }
    }

    /**
     * インスタンス生成
     * @param rankingEntity 
     * @returns 
     */
    public static create(rankingEntity: RankingEntity) {
        return new TopMassRankingModel(rankingEntity);
    }
}