import ValueObject from "../../shared/domain/ValueObject";

export interface TimeProps {
    value: string;
}

export class Time extends ValueObject<TimeProps> {
    /**
     * 日時の取得
     */
    get date(): string {
        return this.props.value;
    }

    /**
     * 現在日時の取得
     */
    get nowDate(): string {
        return new Date().toISOString();
    }

    /**
     * インスタンス生成
     * @param props 
     * @returns 
     */
    static create(props: TimeProps): Time {
        return new Time(props);
    }
}