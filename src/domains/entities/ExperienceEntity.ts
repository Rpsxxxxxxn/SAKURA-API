import { Entity } from "../../shared/domain/Entity";
import { Time } from "../valueobjects/Time";
import { UserName } from "../valueobjects/UserName";

export interface ExperienceProps {
    username: UserName;
    mass: number;
    createdAt: Time;
    updatedAt: Time;
}

export class ExperienceEntity extends Entity<string, ExperienceProps> {
    /**
     * インスタンス生成
     * @param id 
     * @param props 
     * @returns 
     */
    public static create(id: string, props: ExperienceProps) {
        return new ExperienceEntity(id, props);
    }

    /**
     * ユーザ名の修正
     * @param value 
     */
    public changeUsername(value: string): void {
        this.props.username = UserName.create({ name: value });
    }

    /**
     * ユーザ名
     */
     public get username(): string { return this.props.username.DisplayName; }

    /**
     * 最高質量
     */
     public get mass(): number { return this.props.mass; }

    /**
     * 生成日時
     */
    public get createdAt(): string { return this.props.createdAt.date; }

    /**
     * 更新日時
     */
    public get updatedAt(): string { return this.props.updatedAt.date; }
}

