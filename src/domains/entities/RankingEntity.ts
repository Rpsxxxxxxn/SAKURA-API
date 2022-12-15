import { Entity } from "../../shared/domain/Entity";
import { Time } from "../valueobjects/Time";
import { UserName } from "../valueobjects/UserName";

export interface RankingProps {
    gamemode: string;
    username: UserName;
    mass: number;
    createdAt: Time;
    updatedAt: Time;
}

export class RankingEntity extends Entity<number, RankingProps> {
    /**
     * インスタンス生成
     * @param id ID
     * @param props 情報
     * @returns {RankingEntity} エンティティ
     */
    public static create(id: number, props: RankingProps) {
        return new RankingEntity(id, props);
    }

    /**
     * ユーザ名の修正
     * @param value 
     */
     public changeUsername(value: string): void {
        this.props.username = UserName.create({ name: value });
    }
    
    /**
     * ゲームモード
     * @returns {string}
     */
    public get gamemode(): string { return this.props.gamemode; }

    /**
     * ユーザ名
     * @returns {string}
     */
    public get username(): string { return this.props.username.DisplayName; }

    /**
     * 最高質量
     * @returns {number}
     */
    public get mass(): number { return this.props.mass; }

    /**
     * 生成日時
     * @returns {string}
     */
    public get createdAt(): string { return this.props.createdAt.date; }

    /**
     * 更新日時
     * @returns {string}
     */
    public get updatedAt(): string { return this.props.updatedAt.date; }
}