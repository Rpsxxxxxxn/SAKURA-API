import { Entity } from "../../shared/domain/Entity";
import { Time } from "../valueobjects/Time";

export interface RankingProps {
    gamemode: string;
    username: string;
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
     * イコール
     * @param obj 
     */
    public equals(obj?: Entity<number, RankingProps> | undefined): boolean {
        throw new Error("Method not implemented.");
    }

    public set gamemode(value: string) { this.props.gamemode = value; }
    public get gamemode(): string { return this.props.gamemode; }

    public set username(value: string) { this.props.username = value; }
    public get username(): string { return this.props.username; }

    public set mass(value: string) { this.props.mass = value; }
    public get mass(): string { return this.props.mass; }

    public set createdAt(value: string) { this.props.createdAt = Time.create({date: value}); }
    public get createdAt(): string { return this.props.createdAt.date; }

    public set updatedAt(value: string) { this.props.updatedAt = Time.create({date: value}); }
    public get updatedAt(): string { return this.props.updatedAt.date; }
}