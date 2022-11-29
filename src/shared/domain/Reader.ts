export interface Reader<Id, Entity> {
    findAll(): Promise<Array<Entity>>;
    find(id: Id): Promise<Entity>;
}