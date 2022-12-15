import { Entity } from "../../shared/domain/Entity";
import { UserType } from "../models/UserType";
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

export class UserEntity extends Entity<number, UserProps> {
    /**
     * インスタンス生成
     * @param id ユーザID
     * @param props ユーザ情報
     * @returns {UserEntity} ユーザエンティティ
     */
    public static create(id: number, props: UserProps) {
        return new UserEntity(id, props);
    }

    /**
     * ユーザ名
     * @param {string} value 変更後のユーザ名
     */
    public changeUsername(value: string) {
        this.props.username = UserName.create({name: value});
    }

    /**
     * 権限の設定
     * @param {number} value ユーザ権限 
     */
    public setAuthority(value: number) {
        if (value === UserType.ADMIN) throw new Error('sorry');
        this.props.authority = Authority.create({value: value});
    }

    /**
     * メールアドレス
     * @returns {boolean} メールアドレスが保持されているかどうか 
     */
    public hasEmail(): boolean {
        return this.email !== null && this.email !== undefined && this.email !== '';
    }

    /**
     * ユーザ名
     * @returns {string}
     */
    public get username(): string { return this.props.username.DisplayName; }

    /**
     * 権限タイプ
     * @returns {number}
     */
    public get authority(): number { return this.props.authority.type; }

    /**
     * メールアドレス
     * @returns {string}
     */
    public get email(): string { return this.props.email; }

    /**
     * パスワード
     * @returns {string}
     */
    public get password(): string { return this.props.password; }

    /**
     * 画像URL
     * @returns {string}
     */
    public get imageUrl(): string { return this.props.imageUrl; }

    /**
     * 生成日時
     * @returns {string}
     */
     public get createdAt(): string { return this.props.createdAt.date; }
 
     /**
      * 更新日時
     * @returns {string}
      */
     public get updatedAt(): string { return this.props.updatedAt.date; }
}