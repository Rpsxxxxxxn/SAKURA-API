import { Entity } from "../../shared/domain/Entity";
import { Time } from "../valueobjects/Time";
import { UserName } from "../valueobjects/UserName";

export interface PostProps {
    title: string;
    detail: string;
    startDate: Time;
    endDate: Time;
    isSuccess: boolean;
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
     public get username(): string { return this.props.title; }

    /**
     * 詳細
     * @returns {string}
     */
     public get detail(): string { return this.props.detail; }

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
}

