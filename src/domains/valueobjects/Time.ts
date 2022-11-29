import ValueObject from "../../shared/domain/ValueObject";

export interface TimeProps {
    date: string;
}

export class Time extends ValueObject<TimeProps> {
    static create(props: TimeProps): Time {
        return new Time(props);
    }

    get date(): string {
        return this.props.date;
    }
}