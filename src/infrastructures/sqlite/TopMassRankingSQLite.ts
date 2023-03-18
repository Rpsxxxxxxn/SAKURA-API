import { RankingEntity } from "../../domains/entities/RankingEntity";
import ITopMassRankingRepository from "../../domains/repositories/TopMassRankingRepository";
import { Time } from "../../domains/valueobjects/Time";
import { UserName } from "../../domains/valueobjects/UserName";
import TopMassRankingSQLiteFake from "./fakes/TopMassRankingSQLiteFake";
import SQLiteHelper from "./helper/SQLiteHelper";

class TopMassRankingSQLite implements ITopMassRankingRepository {
    private static readonly ALL_SQL: string = 'SELECT * FROM sakura_topmass_ranking ORDER BY mass desc;';
    private static readonly ONE_SQL: string = 'SELECT * FROM sakura_topmass_ranking WHERE id = ?;';
    private static readonly INSERT_SQL: string = 'INSERT INTO sakura_topmass_ranking(gamemode, username, mass) VALUES(?, ?, ?);';
    private static readonly UPDATE_SQL: string = 'UPDATE sakura_topmass_ranking SET gamemode=?, username=?, mass=?, updatedAt=? WHERE id = ?;';
    private static readonly DELETE_SQL: string = 'DELETE FROM sakura_topmass_ranking WHERE id = ?;';

    /**
     * 全てを取得
     * @returns {Promise<Array<RankingEntity>>} ランキング情報配列
     */
    public async findAll(): Promise<Array<RankingEntity>> {
        const rankings = await SQLiteHelper.all(TopMassRankingSQLite.ALL_SQL, []);
        const result: Array<RankingEntity> = new Array<RankingEntity>();
        if (!rankings) {
            return result;
        }
        rankings.forEach((ranking: any) => {
            result.push(RankingEntity.create(ranking.id, {
                gamemode: ranking.gamemode,
                username: UserName.create({ name: ranking.username }),
                mass: ranking.mass,
                createdAt: Time.create({ value: ranking.created_at }),
                updatedAt: Time.create({ value: ranking.updated_at }),
            }));
        });
        return result;
    }

    /**
     * 一致するデータを取得
     * @param {number} id プレイヤーID
     * @returns {Promise<RankingEntity>} ランキングデータ
     */
    public async find(id: number): Promise<RankingEntity> {
        const ranking: any = await SQLiteHelper.get(TopMassRankingSQLite.ONE_SQL, [id]);
        const result: RankingEntity = RankingEntity.create(
            ranking.id, {
            gamemode: ranking.gamemode,
            username: UserName.create({ name: ranking.username }),
            mass: ranking.mass,
            createdAt: Time.create({value: ranking.created_at}),
            updatedAt: Time.create({value: ranking.created_at}),
        });
        return result;
    }
    
    /**
     * ランキングの追加
     * @param {RankingEntity} model ランキングモデルデータ
     */
    public async insert(rankingEntity: RankingEntity): Promise<void> {
        await SQLiteHelper.execute(TopMassRankingSQLite.INSERT_SQL,
            rankingEntity.gamemode,
            rankingEntity.username,
            rankingEntity.mass
        );
    }
    
    /**
     * ランキングの更新
     * @param {RankingEntity} model ランキングモデルデータ
     */
    public async update(rankingEntity: RankingEntity): Promise<void> {
        await SQLiteHelper.execute(TopMassRankingSQLite.UPDATE_SQL,
            rankingEntity.gamemode,
            rankingEntity.username,
            rankingEntity.mass,
            rankingEntity.id,
        );
    }
    
    /**
     * ランキングの削除
     * @param {number} id ランキングID
     */
    public async remove(id: number): Promise<void> {
        await SQLiteHelper.execute(TopMassRankingSQLite.DELETE_SQL, id);
    }

    /**
     * インスタンス生成
     * @returns {ITopMassRankingRepository}
     */
    public static create(): ITopMassRankingRepository {
        return process.env.NODE_ENV === 'prd' ? new TopMassRankingSQLite() : new TopMassRankingSQLiteFake();
    }
}

export default TopMassRankingSQLite;