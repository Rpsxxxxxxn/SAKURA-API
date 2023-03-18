import { Entity } from "../../shared/domain/Entity";

export interface ServerListProps {
    name: string;
    detail: string;
    gamemode: string;
    address: string;
    port: string;
    healthCheck: boolean;
}

export class ServerListEntity extends Entity<number, ServerListProps> {
    /**
     * インスタンス生成
     * @param id ID
     * @param props 情報
     * @returns {ServerListEntity} エンティティ
     */
    public static create(id: number, props: ServerListProps): ServerListEntity {
        return new ServerListEntity(id, props);
    }

    /**
     * ゲームタイトル
     * @returns {string}
     */
    public get name(): string { return this.props.name; }

    /**
     * 詳細
     * @returns {string}
     */
    public get detail(): string { return this.props.detail; }


    public get gamemode(): string { return this.props.gamemode; }

    /**
     * アドレス
     * @returns {string}
     */
    public get address(): string { return this.props.address; }

    /**
     * ポート
     * @returns {string}
     */
    public get port(): string { return this.props.port; }

    /**
     * ヘルスチェック
     */
    public get healthCheck(): boolean { return this.props.healthCheck; }
}