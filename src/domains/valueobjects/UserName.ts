import ValueObject from "../../shared/domain/ValueObject";

export interface UserNameProps {
    name: string;
}

export class UserName extends ValueObject<UserNameProps> {
    private static readonly MAX_LENGTH = 30;
    private static readonly MIN_LENGTH = 0;

    /**
     * 名前の取得
     */
    public get DisplayName(): string {
        return this.props.name;
    }

    /**
     * 生成処理
     * @param name 
     * @returns 
     */
    public static create(value: UserNameProps) {
        return new UserName(value);
    }
}