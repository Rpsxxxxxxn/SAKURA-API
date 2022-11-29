import { Entity } from "../../shared/domain/Entity";

export interface ExperienceProps {
    name: string;
}

export class ExperienceEntity extends Entity<string, ExperienceProps> {
    /**
     * インスタンス生成
     * @param id 
     * @param props 
     * @returns 
     */
    public static create(id: string, props: ExperienceProps) {
        return new ExperienceEntity(id, props);
    }

    public equals(obj?: Entity<string, ExperienceProps> | undefined): boolean {
        throw new Error("Method not implemented.");
    }
}

