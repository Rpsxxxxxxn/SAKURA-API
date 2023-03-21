import { ServerListEntity } from "../entities/ServerListEntity";

export class ServerListModel {
    private serverlistEntity: ServerListEntity;

    /**
     * コンストラクタ
     * @param serverlistEntity 
     */
    private constructor(serverlistEntity: ServerListEntity) {
        this.serverlistEntity = serverlistEntity;
    }

     /**
      * 返却用のデータ
      * @returns 
      */
    public responseBody() {
        return {
            id: this.serverlistEntity.id,
            name: this.serverlistEntity.name,
            detail: this.serverlistEntity.detail,
            gamemode: this.serverlistEntity.gamemode,
            address: this.serverlistEntity.address,
            port: this.serverlistEntity.port,
            healthCheck: false
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
                        name: 'ServerName',
                        value: this.serverlistEntity.name,
                        inline: true
                    },
                    {
                        name: 'ServerMode',
                        value: this.serverlistEntity.gamemode,
                        inline: true
                    },
                    {
                        name: 'ServerHealthCheck',
                        value: String(this.serverlistEntity.healthCheck),
                        inline: true
                    }
                ]
            }]
        }
    }

    /**
     * インスタンス生成
     * @param serverlistEntity 
     * @returns 
     */
    public static create(serverlistEntity: ServerListEntity) {
        return new ServerListModel(serverlistEntity);
    }
}