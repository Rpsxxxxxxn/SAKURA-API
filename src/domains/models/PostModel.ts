import { PostEntity } from "../entities/PostEntity";

export class PostModel {
    private postEntity: PostEntity;

    /**
     * コンストラクタ
     * @param postEntity 
     */
    private constructor(postEntity: PostEntity) {
        this.postEntity = postEntity;
    }

     /**
      * 返却用のデータ
      * @returns 
      */
    public responseBody() {
        return {
            id: this.postEntity.id,
            title: this.postEntity.title,
            startDate: this.postEntity.startDate,
            endDate: this.postEntity.endDate,
            isSuccess: this.postEntity.isSuccess,
            createdAt: this.postEntity.createdAt,
            updatedAt: this.postEntity.updatedAt,
        }
    }

    /**
     * インスタンス生成
     * @param postEntity 
     * @returns 
     */
    public static create(postEntity: PostEntity) {
        return new PostModel(postEntity);
    }
}