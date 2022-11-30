import { Entity } from "../../shared/domain/Entity";

export interface ServerListProps {
    name: string;
    detail: string;
    no: number;
    address: string;
    port: string;
}

export class ServerListEntity extends Entity<number, ServerListProps> {
    /**
     * インスタンス生成
     * @param id 
     * @param props 
     * @returns 
     */
    public static create(id: number, props: ServerListProps): ServerListEntity {
        return new ServerListEntity(id, props);
    }
}