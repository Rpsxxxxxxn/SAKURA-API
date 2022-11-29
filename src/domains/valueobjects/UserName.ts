import ValueObject from "../../shared/domain/ValueObject";

export interface UserNameProps {
    name: string;
}

export class UserName extends ValueObject<UserNameProps> {
    private static readonly MAX_LENGTH = 10;
    private static readonly MIN_LENGTH = 3;

    /**
     * 名前の取得
     */
    public get DisplayName(): string {
        return this.props.name;
    }

    /**
     * バリデーションチェック
     * @param name 
     * @returns 
     */
    private static isValidName(name: string) {
        if (name.length > this.MIN_LENGTH && name.length < this.MAX_LENGTH) {
            return true;
        }
        return false;
    }

    /**
     * 生成処理
     * @param name 
     * @returns 
     */
    public static create(value: UserNameProps) {
        if (!this.isValidName(value.name)) {
            throw new Error(`Invalid Argument - userName:${value.name}`);
        }
        return new UserName(value);
    }
}