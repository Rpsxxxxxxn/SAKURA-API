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
     * コンストラクタ
     * @param id 
     * @param props 
     */
    constructor(id: string, props: UserProps) {
        super(id, props);
    }

    /**
     * イコール
     * @param obj 
     */
    public equals(obj?: Entity<string, UserProps> | undefined): boolean {
        throw new Error("Method not implemented.");
    }

    public set username(value: string) { this.props.username = value; }
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