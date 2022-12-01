import ValueObject from "../../shared/domain/ValueObject";

export interface AuthorityProps {
    value: number;
}

export class Authority extends ValueObject<AuthorityProps> {
    /**
     * 種別の取得
     */
    get type(): number {
        return this.props.value;
    }

    /**
     * インスタンス生成
     * @param props 
     * @returns 
     */
    static create(props: AuthorityProps): Authority {
        return new Authority(props);
    }
}