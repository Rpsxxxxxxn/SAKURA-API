import RankingEntity from "../entities/RankingEntity";

interface IExperienceRepository {
    /**
     * 全取得
     */
    findAll(): Promise<Array<RankingEntity>>;

    /**
     * 取得
     * @param id 
     */
    find(id: number): Promise<RankingEntity>;
}

export default IExperienceRepository;