import {RankingEntity} from "../../domains/entities/RankingEntity";
import IRankingRepository from "../../domains/repositories/RankingRepository";
import { Time } from "../../domains/valueobjects/Time";
import { UserName } from "../../domains/valueobjects/UserName";
import RankingSQLiteFake from "./fakes/RankingSQLiteFake";
import SQLiteHelper from "./helper/SQLiteHelper";

class RankingSQLite implements IRankingRepository {
    private static readonly GET_ALL_SQL: string = 'SELECT * FROM sakura_topmass_ranking ORDER BY mass desc;';
    private static readonly GET_ONE_SQL: string = 'SELECT * FROM sakura_topmass_ranking WHERE id = ?;';
    private static readonly INSERT_SQL: string = 'INSERT INTO sakura_topmass_ranking(gamemode, username, mass) VALUES(?, ?, ?);';
    private static readonly DELETE_SQL: string = 'DELETE * FROM sakura_topmass_ranking WHERE id = ?;';
    private static readonly UPDATE_SQL: string = 'UPDATE sakura_topmass_ranking SET gamemode=?, username=?, mass=?, updatedAt=? WHERE id = ?;';

    /**
     * 全てを取得
     * @returns Array<RankingModel>
     */
    public async findAll(): Promise<Array<RankingEntity>> {
        const datalist = await SQLiteHelper.all(RankingSQLite.GET_ALL_SQL);
        const result: Array<RankingEntity> = new Array<RankingEntity>();
        // データがなければ早期リターン
        if (!datalist) return result;
        for (const data of datalist) {
            const rankingEntity = RankingEntity.create(
                data.id, {
                gamemode: data.gamemode,
                username: UserName.create({ name: data.username }),
                mass: data.mass,
                createdAt: Time.create({date: data.created_at}),
                updatedAt: Time.create({date: data.created_at}),
            });
            result.push(rankingEntity);
        }
        return result;
    }

    /**
     * 一致するデータを取得
     * @param id プレイヤーID
     * @returns RankingModel
     */
    public async find(id: number): Promise<RankingEntity> {
        return SQLiteHelper.get(RankingSQLite.GET_ONE_SQL, [id]);
    }
    
    /**
     * ランキングの追加
     * @param model ランキングモデルデータ
     */
    public async insert(model: RankingEntity): Promise<void> {
        await SQLiteHelper.execute(RankingSQLite.INSERT_SQL, [
            model.gamemode,
            model.username,
            model.mass
        ]);
    }
    
    /**
     * ランキングの更新
     * @param model ランキングモデルデータ
     */
    public async update(model: RankingEntity): Promise<void> {
        await SQLiteHelper.execute(RankingSQLite.UPDATE_SQL, [
            model.gamemode,
            model.username,
            model.mass,
            model.id,
        ])
    }
    
    /**
     * ランキングの削除
     * @param id ランキングID
     */
    public async remove(id: number): Promise<void> {
        SQLiteHelper.execute(RankingSQLite.DELETE_SQL, id);
    }

    /**
     * インスタンス生成
     * @returns 
     */
    public static create(): IRankingRepository {
        return process.env.NODE_ENV === 'prd' ? new RankingSQLite() : new RankingSQLiteFake();
    }
}

export default RankingSQLite;