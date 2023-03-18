import { Writer } from './../../shared/domain/Writer';
import { Reader } from './../../shared/domain/Reader';
import { UserEntity } from "../entities/UserEntity";

export default interface IUserRepository extends Reader<number, UserEntity>, Writer<number, UserEntity> {
    findUserIdByUid(uid: string): Promise<UserEntity>;
}