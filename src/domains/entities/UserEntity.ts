import { Entity } from "../../shared/domain/Entity";
import { Time } from "../valueobjects/Time";
import { UserName } from "../valueobjects/UserName";

export interface UserProps {
    uid: string;
    username: UserName;
    profileImageURL: string;
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
     * User ID
     */
    public get uid(): string { return this.props.uid; }

    /**
     * ユーザ名
     */
    public get username(): string { return this.props.username.DisplayName; }

    /**
     * プロフィール画像URL
     */
    public get profileImageURL(): string { return this.props.profileImageURL; }

    /**
     * 生成日時
     */
    public get createdAt(): string { return this.props.createdAt.date; }

    /**
     * 更新日時
     */
    public get updatedAt(): string { return this.props.updatedAt.date; }
}