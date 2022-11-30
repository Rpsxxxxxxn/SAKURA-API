export interface Writer<Id, Entity> {
    insert(value: Entity): Promise<void>;
    update(value: Entity): Promise<void>;
    remove(id: Id): Promise<void>;
}