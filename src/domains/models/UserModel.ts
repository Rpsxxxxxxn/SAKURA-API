import { UserEntity } from "../entities/UserEntity";

export class UserModel {
    private userEntity: UserEntity;

    /**
     * コンストラクタ
     * @param userEntity 
     */
    private constructor(userEntity: UserEntity) {
        this.userEntity = userEntity;
    }

     /**
      * 返却用のデータ
      * @returns 
      */
    public responseBody() {
        return {
            id: this.userEntity.id,
            username: this.userEntity.username,
            profileImageURL: this.userEntity.profileImageURL,
            createdAt: this.userEntity.createdAt,
            updatedAt: this.userEntity.updatedAt,
        }
    }

    /**
     * インスタンス生成
     * @param userEntity 
     * @returns 
     */
    public static create(userEntity: UserEntity) {
        return new UserModel(userEntity);
    }
}