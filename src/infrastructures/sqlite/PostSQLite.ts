import { PostEntity } from "../../domains/entities/PostEntity";
import IPostRepository from "../../domains/repositories/PostRepository";
import PostSQLiteFake from "./fakes/PostSQLiteFake";

class PostSQLite implements IPostRepository {
    findAll(): Promise<PostEntity[]> {
        throw new Error("Method not implemented.");
    }
    find(id: number): Promise<PostEntity> {
        throw new Error("Method not implemented.");
    }
    insert(value: PostEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(value: PostEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
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