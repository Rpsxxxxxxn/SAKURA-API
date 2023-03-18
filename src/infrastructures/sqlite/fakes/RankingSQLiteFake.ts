import {RankingEntity} from "../../../domains/entities/RankingEntity";
import IRankingRepository from "../../../domains/repositories/TopMassRankingRepository";
import { Time } from "../../../domains/valueobjects/Time";
import { UserName } from "../../../domains/valueobjects/UserName";

class RankingSQLiteFake implements IRankingRepository {
    /**
     * 全てを取得
     * @returns Array<RankingModel>
     */
    public async findAll(): Promise<Array<RankingEntity>> {
        const result: Array<RankingEntity> = new Array<RankingEntity>();
        result.push(RankingEntity.create(1, {
            gamemode: '',
            username: UserName.create({ name: '' }),
            mass: 0,
            createdAt: Time.create({ value: new Date().toISOString() }),
            updatedAt: Time.create({ value: new Date().toISOString() })
        }))
        result.push(RankingEntity.create(2, {
            gamemode: '',
            username: UserName.create({ name: '' }),
            mass: 0,
            createdAt: Time.create({ value: new Date().toISOString() }),
            updatedAt: Time.create({ value: new Date().toISOString() })
        }))
        return result;
    }

    /**
     * 一致するデータを取得
     * @param id プレイヤーID
     * @returns RankingModel
     */
    public async find(id: number): Promise<RankingEntity> {
        return RankingEntity.create(id, {
            gamemode: '',
            username: UserName.create({ name: '' }),
            mass: 0,
            createdAt: Time.create({ value: new Date().toISOString() }),
            updatedAt: Time.create({ value: new Date().toISOString() })
        });
    }

    /**
     * 追加を行う
     * @param model RankingModel
     */
    public async insert(model: RankingEntity): Promise<void> {
        console.log(model);
    }

    /**
     * 更新を行う
     * @param model RankingModel
     */
    public async update(model: RankingEntity): Promise<void> {
        console.log(model);
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