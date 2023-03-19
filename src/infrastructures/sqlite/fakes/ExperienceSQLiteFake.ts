import { Time } from './../../../domains/valueobjects/Time';
import { ExperienceEntity } from "../../../domains/entities/ExperienceEntity";
import IExperienceRepository from "../../../domains/repositories/ExperienceRepository";


class ExperienceSQLiteFake implements IExperienceRepository {
    
    /**
     * 全件取得
     */
    public async findAll(): Promise<ExperienceEntity[]> {
        return [
            ExperienceEntity.create(1, {
                experience: 100,
                createdAt: Time.create({ value: new Date().toISOString() }),
                updatedAt: Time.create({ value: new Date().toISOString() }),
            }),
            ExperienceEntity.create(1, {
                experience: 200,
                createdAt: Time.create({ value: new Date().toISOString() }),
                updatedAt: Time.create({ value: new Date().toISOString() }),
            })
        ];
    }

    /**
     * 一件取得
     * @param id 
     */
    public async find(id: number): Promise<ExperienceEntity> {
        return ExperienceEntity.create(1, {
            experience: 200,
            createdAt: Time.create({ value: new Date().toISOString() }),
            updatedAt: Time.create({ value: new Date().toISOString() }),
        })
    }

    /**
     * 経験値の保存
     * @param value 
     */
    public async insert(value: ExperienceEntity): Promise<void> {
        console.log(value)
    }

    /**
     * 経験値の更新
     * @param value 
     */
    public async update(value: ExperienceEntity): Promise<void> {
        console.log(value)
    }

    /**
     * 経験値の削除
     * @param id 
     */
    public async remove(id: number): Promise<void> {
        console.log(id)
    }
}

export default ExperienceSQLiteFake;