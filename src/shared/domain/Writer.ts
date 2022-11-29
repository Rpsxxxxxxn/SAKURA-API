export interface Writer<E> {
    save(value: E): Promise<void>;
    remove(id: any): Promise<void>;
}