import ValueObject from "../../shared/domain/ValueObject";

export interface AuthorityProps {
    value: number;
}

export class Authority extends ValueObject<AuthorityProps> {
    /**
     * 種別の取得
     * @returns {number}
     */
    get type(): number {
        return this.props.value;
    }

    /**
     * インスタンス生成
     * @param {AuthorityProps} props
     * @returns {Authority} インスタンス
     */
    static create(props: AuthorityProps): Authority {
        return new Authority(props);
    }
}