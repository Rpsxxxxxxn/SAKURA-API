import { Entity } from "../../shared/domain/Entity";
import { Authority } from "../valueobjects/Authority";
import { Time } from "../valueobjects/Time";
import { UserName } from "../valueobjects/UserName";

export interface UserProps {
    username: UserName;
    authority: Authority;
    email: string;
    password: string;
    imageUrl: string;
    createdAt: Time;
    updatedAt: Time;
}

export class UserEntity extends Entity<string, UserProps> {
    /**
     * インスタンス生成
     * @param id 
     * @param props 
     * @returns 
     */
    public static create(id: string, props: UserProps) {
        return new UserEntity(id, props);
    }

    /**
     * イコール
     * @param obj 
     */
    public equals(obj: Entity<string, UserProps>): boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * 名前バリデーション
     * @param value 
     * @returns 
     */
    private isValidName(value: string) {
        if (value) {
            return false;
        }
        if (value.length < 3 || value.length > 10) {
            return false;
        }
        return true;
    }

    /**
     * ユーザ名
     * @param value 
     */
    public set username(value: string) {
        this.props.username = UserName.create({name: value});
    }
    public get username(): string { return this.props.username.DisplayName; }

    /**
     * 権限タイプ
     */
    public set type(value: number) { this.props.authority = Authority.create({value: value}); }
    public get type(): number { return this.props.authority.type; }

    /**
     * メールアドレス
     */
    public set email(value: string) { this.props.email = value; }
    public get email(): string { return this.props.email; }

    /**
     * パスワード
     */
    public set password(value: string) { this.props.password = value; }
    public get password(): string { return this.props.password; }

    /**
     * 画像URL
     */
    public set imageUrl(value: string) { this.props.imageUrl = value; }
    public get imageUrl(): string { return this.props.imageUrl; }

    /**
     * 生成日時
     */
     public set createdAt(value: string) { this.props.createdAt = Time.create({date: value}); }
     public get createdAt(): string { return this.props.createdAt.date; }
 
     /**
      * 更新日時
      */
     public set updatedAt(value: string) { this.props.updatedAt = Time.create({date: value}); }
     public get updatedAt(): string { return this.props.updatedAt.date; }
}