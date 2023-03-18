import { Entity } from "../../shared/domain/Entity";
import { Time } from "../valueobjects/Time";

export interface PostProps {
    title: string;
    startDate: Time;
    endDate: Time;
    isSuccess: boolean;
    createdAt: Time;
    updatedAt: Time;
}

export class PostEntity extends Entity<number, PostProps> {
    /**
     * インスタンス生成
     * @param id ID
     * @param props 情報
     * @returns {PostEntity} エンティティ
     */
    public static create(id: number, props: PostProps) {
        return new PostEntity(id, props);
    }

    /**
     * タイトルの修正
     * @param value 
     */
    public changeTitle(value: string): void {
        this.props.title = value;
    }

    /**
     * ユーザ名
     * @returns {string}
     */
    public get title(): string { return this.props.title; }

    /**
     * 開始日時
     * @returns {string}
     */
    public get startDate(): string { return this.props.startDate.date; }

    /**
     * 終了日時
     * @returns {string}
     */
    public get endDate(): string { return this.props.endDate.date; }

    /**
     * 完了したタスク
     * @returns {boolean}
     */
    public get isSuccess(): boolean { return this.props.isSuccess; }

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

