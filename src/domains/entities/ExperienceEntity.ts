import { Entity } from "../../shared/domain/Entity";

export interface ExperienceProps {
    name: string;
}

export class ExperienceEntity extends Entity<string, ExperienceProps> {
    constructor(id: string, props: ExperienceProps) {
        super(id, props);
    }

    public equals(obj?: Entity<string, ExperienceProps> | undefined): boolean {
        throw new Error("Method not implemented.");
    }
}

