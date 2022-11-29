import {RankingEntity} from "../../domains/entities/RankingEntity";
import IRankingRepository from "../../domains/repositories/RankingRepository";
import { Time } from "../../domains/valueobjects/Time";
import { UserName } from "../../domains/valueobjects/UserName";
import SQLiteHelper from "./helper/SQLiteHelper";

class RankingSQLite implements IRankingRepository {
    private static readonly GETALL: string = 'SELECT * FROM sakura_topmass_ranking ORDER BY mass desc LIMIT 1;';
    private static readonly GETONE: string = 'SELECT * FROM sakura_topmass_ranking ORDER BY mass desc WHERE id = ?;';

    /**
     * 全てを取得
     * @returns Array<RankingModel>
     */
    public async findAll(): Promise<Array<RankingEntity>> {
        const datalist = await SQLiteHelper.all(RankingSQLite.GETALL);
        const result: Array<RankingEntity> = new Array<RankingEntity>();
        if (datalist) {
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
        }
        return result;
    }

    /**
     * 一致するデータを取得
     * @param id プレイヤーID
     * @returns RankingModel
     */
    public async find(id: number): Promise<RankingEntity> {
        return SQLiteHelper.get(RankingSQLite.GETONE, [id]);
    }
    
    /**
     * ランキングの追加と更新
     * @param model ランキングモデルデータ
     */
    public async save(model: RankingEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    /**
     * ランキングの削除
     * @param id ランキングID
     */
    public async remove(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export default RankingSQLite;