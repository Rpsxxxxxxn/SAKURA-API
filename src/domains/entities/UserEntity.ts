import { Entity } from "../../shared/domain/Entity";
import { UserType } from "../models/UserType";
import { Authority } from "../valueobjects/Authority";
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

    public get uid(): string { return this.props.uid; }

    public get username(): string { return this.props.username.DisplayName; }

    public get profileImageURL(): string { return this.props.profileImageURL; }

    public get createdAt(): string { return this.props.createdAt.date; }

    public get updatedAt(): string { return this.props.updatedAt.date; }
}