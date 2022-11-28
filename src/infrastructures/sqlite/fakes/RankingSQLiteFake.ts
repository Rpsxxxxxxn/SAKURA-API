import {RankingEntity} from "../../../domains/entities/RankingEntity";
import IRankingRepository from "../../../domains/repositories/RankingRepository";

class RankingSQLiteFake implements IRankingRepository {
    /**
     * 全てを取得
     * @returns Array<RankingModel>
     */
    public async findAll(): Promise<Array<RankingEntity>> {
        const result: Array<RankingEntity> = new Array<RankingEntity>();
        result.push(new RankingEntity(1, {
            gamemode: '',
            username: '',
            mass: '',
            createdAt: '',
            updatedAt: '',
        }))
        result.push(new RankingEntity(2, {
            gamemode: '',
            username: '',
            mass: '',
            createdAt: '',
            updatedAt: '',
        }))
        return result;
    }

    /**
     * 一致するデータを取得
     * @param id プレイヤーID
     * @returns RankingModel
     */
    public async find(id: number): Promise<RankingEntity> {
        return new RankingEntity(1, {
            gamemode: '',
            username: '',
            mass: '',
            createdAt: '',
            updatedAt: '',
        });
    }
    
    /**
     * ランキングの追加と更新
     * @param model ランキングモデルデータ
     */
    public async save(model: RankingEntity): Promise<void> {
        console.log(model);
        console.log('RankingSQLiteFake.Saveが呼ばれた');
    }
    
    /**
     * ランキングの削除
     * @param id ランキングID
     */
    public async remove(id: number): Promise<void> {
        console.log(id);
        console.log('RankingSQLiteFake.Removeが呼ばれた');
    }
}

export default RankingSQLiteFake;