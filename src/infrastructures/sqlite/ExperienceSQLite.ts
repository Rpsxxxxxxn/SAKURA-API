import { ExperienceEntity } from "../../domains/entities/ExperienceEntity";
import IExperienceRepository from "../../domains/repositories/ExperienceRepository";
import ExperienceSQLiteFake from "./fakes/ExperienceSQLiteFake";

class ExperienceSQLite implements IExperienceRepository {
    
    /**
     * 全件取得
     */
    findAll(): Promise<ExperienceEntity[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * 一件取得
     * @param id 
     */
    find(id: number): Promise<ExperienceEntity> {
        throw new Error("Method not implemented.");
    }

    /**
     * 経験値の保存
     * @param value 
     */
    insert(value: ExperienceEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * 経験値の更新
     * @param value 
     */
    update(value: ExperienceEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * 経験値の削除
     * @param id 
     */
    remove(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * インスタンス生成
     * @returns 
     */
     public static create(): IExperienceRepository {
        return process.env.NODE_ENV === 'prd' ? new ExperienceSQLite() : new ExperienceSQLiteFake();
    }
}

export default ExperienceSQLite;