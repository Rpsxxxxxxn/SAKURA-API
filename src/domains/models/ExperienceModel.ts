import { ExperienceEntity } from './../entities/ExperienceEntity';

export class ExperienceModel {
    private experienceEntity: ExperienceEntity;

    /**
     * コンストラクタ
     * @param rankingEntity 
     */
    private constructor(experienceEntity: ExperienceEntity) {
        this.experienceEntity = experienceEntity;
    }

     /**
      * 返却用のデータ
      * @returns 
      */
    public responseBody() {
        return {
            id: this.experienceEntity.id,
            experience: this.experienceEntity.experience,
            createdAt: this.experienceEntity.createdAt,
            updatedAt: this.experienceEntity.updatedAt,
        }
    }

    /**
     * インスタンス生成
     * @param rankingEntity 
     * @returns 
     */
    public static create(rankingEntity: ExperienceEntity) {
        return new ExperienceModel(rankingEntity);
    }
}