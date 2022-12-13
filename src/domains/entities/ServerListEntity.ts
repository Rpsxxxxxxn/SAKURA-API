import { Entity } from "../../shared/domain/Entity";

export interface ServerListProps {
    name: string;
    detail: string;
    no: number;
    address: string;
    port: string;
}

export class ServerListEntity extends Entity<number, ServerListProps> {
    /**
     * インスタンス生成
     * @param id 
     * @param props 
     * @returns 
     */
    public static create(id: number, props: ServerListProps): ServerListEntity {
        return new ServerListEntity(id, props);
    }

    /**
     * ゲームタイトル
     */
    public get name(): string { return this.props.name; }

    /**
     * 詳細
     */
    public get detail(): string { return this.props.detail; }

    /**
     * 番号
     */
    public get no(): number { return this.props.no; }

    /**
     * アドレス
     */
    public get address(): string { return this.props.address; }

    /**
     * ポート
     */
    public get port(): string { return this.props.port; }
}