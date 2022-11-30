export abstract class Entity <Id, Props> {
    public readonly id: Id;
    protected props: Props;

    /**
     * コンストラクタ
     * @param id 
     * @param props 
     */
    protected constructor(id: Id, props: Props) {
        this.id = Object.freeze(id);
        this.props = props;
    }

    /**
     * 同等か検査
     * @param object 
     * @returns 
     */
    public equals(object: Entity<Id, Props>): boolean {
        if (object === null || object === undefined) return false;
        if (this === object) return true;
        if (!(object instanceof Entity)) return false;
        return this.id == object.id;
    }
}