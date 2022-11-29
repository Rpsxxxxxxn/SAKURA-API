export interface Reader<E> {
    findAll(): Promise<E>;
    find(): Promise<E>;
}