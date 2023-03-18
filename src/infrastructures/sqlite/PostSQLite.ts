import { PostEntity } from "../../domains/entities/PostEntity";
import IPostRepository from "../../domains/repositories/PostRepository";
import PostSQLiteFake from "./fakes/PostSQLiteFake";
import SQLiteHelper from "./helper/SQLiteHelper";

class PostSQLite implements IPostRepository {
    private static readonly ALL_SQL: string = 'SELECT * FROM sakura_tasks ORDER BY updatedAt desc;';
    private static readonly ONE_SQL: string = 'SELECT * FROM sakura_tasks WHERE id = ?;';
    private static readonly INSERT_SQL: string = 'INSERT INTO sakura_tasks(title, startDate, endDate, isSuccess) VALUES(?, ?, ?, ?)';
    private static readonly UPDATE_SQL: string = 'UPDATE sakura_tasks SET title=?, startDate=?, endDate=?, isSuccess=? WHERE id = ?;';
    private static readonly DELETE_SQL: string = 'DELETE FROM sakura_tasks WHERE id = ?;';

    /**
     * 全件取得
     * @returns {Promise<PostEntity[]>}
     */
    public async findAll(): Promise<PostEntity[]> {
        const posts = await SQLiteHelper.all(PostSQLite.ALL_SQL, []);
        const result: Array<PostEntity> = new Array<PostEntity>();
        if (!posts) {
            return result;
        }
        posts.forEach((post: any) => {
            result.push(PostEntity.create(post.id, {
                title: post.title,
                startDate: post.startDate,
                endDate: post.endDate,
                isSuccess: post.isSuccess,
                createdAt: post.createdAt,
                updatedAt: post.updatedAt,
            }));
        });
        return result;
    }

    /**
     * 一件取得
     * @param {number} id 
     * @returns {Promise<PostEntity>}
     */
    public async find(id: number): Promise<PostEntity> {
        const post = await SQLiteHelper.get(PostSQLite.ONE_SQL, [id]);
        return PostEntity.create(post.id, {
            title: post.title,
            startDate: post.startDate,
            endDate: post.endDate,
            isSuccess: post.isSuccess,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
        });
    }

    /**
     * タスクの保存
     * @param {PostEntity} value 
     */
    public async insert(value: PostEntity): Promise<void> {
        await SQLiteHelper.execute(PostSQLite.INSERT_SQL, [
            value.title,
            value.startDate,
            value.endDate,
            value.isSuccess
        ]);
    }

    /**
     * タスクの更新
     * @param {PostEntity} value 
     */
    public async update(value: PostEntity): Promise<void> {
        await SQLiteHelper.execute(PostSQLite.UPDATE_SQL, [
            value.title,
            value.startDate,
            value.endDate,
            value.isSuccess,
            value.id
        ]);
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