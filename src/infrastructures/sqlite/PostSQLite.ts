import { PostEntity } from "../../domains/entities/PostEntity";
import IPostRepository from "../../domains/repositories/PostRepository";
import PostSQLiteFake from "./fakes/PostSQLiteFake";
import SQLiteHelper from "./helper/SQLiteHelper";

class PostSQLite implements IPostRepository {
    private static readonly GET_ALL_SQL: string = 'SELECT * FROM sakura_user_task ORDER BY updatedAt desc;';
    private static readonly GET_ONE_SQL: string = 'SELECT * FROM sakura_user_task WHERE user_id = ?;';
    private static readonly INSERT_SQL: string = 'INSERT INTO sakura_user_task(experience, top_mass) VALUES(?, ?)';
    private static readonly DELETE_SQL: string = 'DELETE * FROM sakura_user_task WHERE user_id = ?;';
    private static readonly UPDATE_SQL: string = 'UPDATE sakura_user_task SET experience=?, top_mass=? WHERE user_id = ?;';


    /**
     * 全件取得
     * @returns {Promise<PostEntity[]>}
     */
    public async findAll(): Promise<PostEntity[]> {
        return await SQLiteHelper.all(PostSQLite.GET_ALL_SQL, []);
    }

    /**
     * 一件取得
     * @param {number} id 
     * @returns {Promise<PostEntity>}
     */
    public async find(id: number): Promise<PostEntity> {
        return await SQLiteHelper.get(PostSQLite.GET_ONE_SQL, []);
    }

    /**
     * タスクの保存
     * @param {PostEntity} value 
     */
    public async insert(value: PostEntity): Promise<void> {
        await SQLiteHelper.execute(PostSQLite.INSERT_SQL, []);
    }

    /**
     * タスクの更新
     * @param {PostEntity} value 
     */
    public async update(value: PostEntity): Promise<void> {
        await SQLiteHelper.execute(PostSQLite.UPDATE_SQL, []);
    }

    /**
     * タスクの削除
     * @param {number} id 
     */
    public async remove(id: number): Promise<void> {
        await SQLiteHelper.execute(PostSQLite.DELETE_SQL, [id]);
    }

    /**
     * インスタンス生成
     * @returns {IPostRepository}
     */
     public static create(): IPostRepository {
        return process.env.NODE_ENV === 'prd' ? new PostSQLite() : new PostSQLiteFake();
    }
}

export default PostSQLite;