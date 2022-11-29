import {RankingEntity} from "../entities/RankingEntity";

interface IRankingRepository {
    /**
     * ランキングの全取得
     */
    findAll(): Promise<Array<RankingEntity>>;
    
    /**
     * ランキング検索
     * @param id ランキングID
     */
    find(id: number): Promise<RankingEntity>;

    /**
     * ランキングの追加と更新
     * @param model ランキングモデルデータ
     */
    save(model: RankingEntity): Promise<void>;

    /**
     * ランキングの削除
     * @param id ランキングID
     */
    remove(id: number): Promise<void>;
}

export default IRankingRepository;