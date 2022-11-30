import { Entity } from "../../shared/domain/Entity";
import { Time } from "../valueobjects/Time";
import { UserName } from "../valueobjects/UserName";

export interface RankingProps {
    gamemode: string;
    username: UserName;
    mass: string;
    createdAt: Time;
    updatedAt: Time;
}

export class RankingEntity extends Entity<number, RankingProps> {
    /**
     * インスタンス生成
     * @param id 
     * @param props 
     * @returns 
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
     */
    public get gamemode(): string { return this.props.gamemode; }

    /**
     * ユーザ名
     */
    public get username(): string { return this.props.username.DisplayName; }

    /**
     * 最高質量
     */
    public get mass(): string { return this.props.mass; }

    /**
     * 生成日時
     */
    public get createdAt(): string { return this.props.createdAt.date; }

    /**
     * 更新日時
     */
    public get updatedAt(): string { return this.props.updatedAt.date; }
}