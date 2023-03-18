import { Entity } from "../../shared/domain/Entity";
import { Time } from "../valueobjects/Time";

export interface MaintenanceProps {
    title: string;
    detail: string;
    startDate: Time;
    endDate: Time;
}

export class MaintenanceEntity extends Entity<number, MaintenanceProps> {
    /**
     * インスタンス生成
     * @param id ID
     * @param props 情報
     * @returns {MaintenanceEntity} エンティティ
     */
    public static create(id: number, props: MaintenanceProps) {
        return new MaintenanceEntity(id, props);
    }

    /**
     * タイトルの取得
     */
    public get title(): string { return this.props.title; }

    /**
     * 詳細の取得
     */
    public get detail(): string { return this.props.detail; }

    /**
     * 開始日時の取得
     */
    public get startDate(): string { return this.props.startDate.date; }

    /**
     * 終了日時の取得
     */
    public get endDate(): string { return this.props.endDate.date; }
}

