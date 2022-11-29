import ValueObject from "../../shared/domain/ValueObject";

export interface AuthorityProps {
    value: number;
}

export class Authority extends ValueObject<AuthorityProps> {
    static create(props: AuthorityProps): Authority {
        return new Authority(props);
    }

    get type(): number {
        return this.props.value;
    }
}