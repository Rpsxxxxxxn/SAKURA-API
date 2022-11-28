import { Entity } from "../../shared/domain/Entity";

export interface RankingProps {
    gamemode: string;
    username: string;
    mass: string;
    createdAt: string;
    updatedAt: string;
}

export class RankingEntity extends Entity<number, RankingProps> {

    /**
     * コンストラクタ
     * @param id 
     * @param props 
     */
    constructor(id: number, props: RankingProps) {
        super(id, props);
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

    public set createdAt(value: string) { this.props.createdAt = value; }
    public get createdAt(): string { return this.props.createdAt; }

    public set updatedAt(value: string) { this.props.updatedAt = value; }
    public get updatedAt(): string { return this.props.updatedAt; }
}