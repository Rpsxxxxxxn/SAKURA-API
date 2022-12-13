import { PostEntity } from "../../domains/entities/PostEntity";
import IPostRepository from "../../domains/repositories/PostRepository";
import PostSQLiteFake from "./fakes/PostSQLiteFake";

class PostSQLite implements IPostRepository {

    /**
     * タスクの全権検索
     */
    findAll(): Promise<PostEntity[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * タスクの検索
     * @param id 
     */
    find(id: number): Promise<PostEntity> {
        throw new Error("Method not implemented.");
    }

    /**
     * タスクの追加
     * @param value 
     */
    insert(value: PostEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * タスク更新
     * @param value 
     */
    update(value: PostEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * タスク削除
     * @param id 
     */
    remove(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * インスタンス生成
     * @returns 
     */
     public static create(): IPostRepository {
        return process.env.NODE_ENV === 'prd' ? new PostSQLite() : new PostSQLiteFake();
    }
}

export default PostSQLite;