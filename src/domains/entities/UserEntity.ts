import { Entity } from "../../shared/domain/Entity";

export interface UserProps {
    username: string;
    email: string;
    password: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
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
    public equals(obj?: Entity<string, UserProps> | undefined): boolean {
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
        if (!this.isValidName(value)) {
            throw new Error('UserEntity.username: ValidError');
        }
        this.props.username = value;
    }
    public get username(): string { return this.props.username; }

    public set email(value: string) { this.props.email = value; }
    public get email(): string { return this.props.email; }

    public set password(value: string) { this.props.password = value; }
    public get password(): string { return this.props.password; }

    public set imageUrl(value: string) { this.props.imageUrl = value; }
    public get imageUrl(): string { return this.props.imageUrl; }

    public set createdAt(value: string) { this.props.createdAt = value; }
    public get createdAt(): string { return this.props.createdAt; }

    public set updatedAt(value: string) { this.props.updatedAt = value; }
    public get updatedAt(): string { return this.props.updatedAt; }
}