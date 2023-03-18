import { Entity } from "../../shared/domain/Entity";
import { Time } from "../valueobjects/Time";

export interface ExperienceProps {
    experience: number;
    createdAt: Time;
    updatedAt: Time;
}

export class ExperienceEntity extends Entity<number, ExperienceProps> {
    /**
     * インスタンス生成
     * @param id ID
     * @param props 情報
     * @returns {ExperienceEntity} エンティティ
     */
    public static create(id: number, props: ExperienceProps) {
        return new ExperienceEntity(id, props);
    }
    /**
     * 最高質量
     * @returns {number}
     */
     public get experience(): number { return this.props.experience; }

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

