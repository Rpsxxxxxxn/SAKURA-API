export interface Writer<Id, Entity> {
    save(value: Entity): Promise<void>;
    remove(id: Id): Promise<void>;
}