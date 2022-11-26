import BaseValueObject from "../../shared/domain/ValueObject";

export interface TimeProps {
    date: string;
}

export class Time extends BaseValueObject<TimeProps> {
    static create(props: TimeProps): Time {
        return new Time(props);
    }

    get date(): string {
        return this.props.date;
    }
}