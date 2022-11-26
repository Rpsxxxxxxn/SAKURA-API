import ValueObject from "../../shared/domain/ValueObject";

export interface UserNameProps {
    value: string;
}

export class UserName extends ValueObject<UserNameProps> {
    private static readonly MAX_LENGTH = 10;
    private static readonly MIN_LENGTH = 3;

    /**
     * 名前の取得
     */
    get value(): string {
        return this.props.value;
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
    public static create(name: string) {
        if (!this.isValidName(name)) {
            throw new Error(`Invalid Argument - userName:${name}`);
        }
        return new UserName({ value: name });
    }
}