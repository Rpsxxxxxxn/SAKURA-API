import { ExperienceEntity } from "../../domains/entities/ExperienceEntity";
import IExperienceRepository from "../../domains/repositories/ExperienceRepository";
import ExperienceSQLiteFake from "./fakes/ExperienceSQLiteFake";
import SQLiteHelper from "./helper/SQLiteHelper";

class ExperienceSQLite implements IExperienceRepository {
    private static readonly GET_ALL_SQL: string = 'SELECT * FROM sakura_experience ORDER BY mass desc;';
    private static readonly GET_ONE_SQL: string = 'SELECT * FROM sakura_experience WHERE user_id = ?;';
    private static readonly INSERT_SQL: string = 'INSERT INTO sakura_experience(experience, top_mass) VALUES(?, ?)';
    private static readonly DELETE_SQL: string = 'DELETE * FROM sakura_experience WHERE user_id = ?;';
    private static readonly UPDATE_SQL: string = 'UPDATE sakura_experience SET experience=?, top_mass=? WHERE user_id = ?;';

    /**
     * 全件取得
     * @returns {Promise<ExperienceEntity[]>}
     */
    public async findAll(): Promise<ExperienceEntity[]> {
        return await SQLiteHelper.all(ExperienceSQLite.GET_ALL_SQL, []);
    }

    /**
     * 一件取得
     * @param {number} id 
     * @returns {Promise<ExperienceEntity>}
     */
    public async find(id: number): Promise<ExperienceEntity> {
        return await SQLiteHelper.get(ExperienceSQLite.GET_ONE_SQL, []);
    }

    /**
     * 経験値の保存
     * @param {ExperienceEntity} value 
     */
    public async insert(value: ExperienceEntity): Promise<void> {
        await SQLiteHelper.execute(ExperienceSQLite.INSERT_SQL, []);
    }

    /**
     * 経験値の更新
     * @param {ExperienceEntity} value 
     */
    public async update(value: ExperienceEntity): Promise<void> {
        await SQLiteHelper.execute(ExperienceSQLite.UPDATE_SQL, []);
    }

    /**
     * 経験値の削除
     * @param {number} id 
     */
    public async remove(id: number): Promise<void> {
        await SQLiteHelper.execute(ExperienceSQLite.DELETE_SQL, [id]);
    }

    /**
     * インスタンス生成
     * @returns {IExperienceRepository}
     */
     public static create(): IExperienceRepository {
        return process.env.NODE_ENV === 'prd' ? new ExperienceSQLite() : new ExperienceSQLiteFake();
    }
}

export default ExperienceSQLite;