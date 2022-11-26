class UserEntity {
    private _id: number = 0;
    private _username: string = '';
    private _email: string = '';
    private _password: string = '';
    private _imageUrl: string = '';
    private _createdAt: string = '';
    private _updatedAt: string = '';

    constructor(id: number) {
        this._id = id;
    }

    public get id(): number { return this._id; }

    public set username(value: string) { this._username = value; }
    public get username(): string { return this._username; }

    public set email(value: string) { this._email = value; }
    public get email(): string { return this._email; }

    public set password(value: string) { this._password = value; }
    public get password(): string { return this._password; }

    public set imageUrl(value: string) { this._imageUrl = value; }
    public get imageUrl(): string { return this._imageUrl; }

    public set createdAt(value: string) { this._createdAt = value; }
    public get createdAt(): string { return this._createdAt; }

    public set updatedAt(value: string) { this._updatedAt = value; }
    public get updatedAt(): string { return this._updatedAt; }
}

export default UserEntity;