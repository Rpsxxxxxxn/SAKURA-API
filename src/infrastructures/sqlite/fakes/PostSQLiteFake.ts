import { PostEntity } from "../../../domains/entities/PostEntity";
import IPostRepository from "../../../domains/repositories/PostRepository";

class PostSQLiteFake implements IPostRepository {
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
}

export default PostSQLiteFake;