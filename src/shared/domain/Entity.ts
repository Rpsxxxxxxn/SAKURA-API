export abstract class Entity<T> {
    protected readonly _id: string;
    protected props: T;

    constructor(props: T, id: string) {
        this._id = id;
        this.props = props
    }
}