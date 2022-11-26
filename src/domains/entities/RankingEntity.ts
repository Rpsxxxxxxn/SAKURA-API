class RankingEntity {
    private _id: number = 0;
    private _gamemode: string = '';
    private _username: string = '';
    private _mass: string = '';
    private _createdAt: string = '';
    private _updatedAt: string = '';

    constructor(id: number) {
        this._id = id;
    }

    public get id(): number { return this._id; }

    public set gamemode(value: string) { this._gamemode = value; }
    public get gamemode(): string { return this._gamemode; }

    public set username(value: string) { this._username = value; }
    public get username(): string { return this._username; }

    public set mass(value: string) { this._mass = value; }
    public get mass(): string { return this._mass; }

    public set createdAt(value: string) { this._createdAt = value; }
    public get createdAt(): string { return this._createdAt; }

    public set updatedAt(value: string) { this._updatedAt = value; }
    public get updatedAt(): string { return this._updatedAt; }
}

export default RankingEntity;