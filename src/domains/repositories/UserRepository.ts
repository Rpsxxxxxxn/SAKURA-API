import { Reader } from "../../shared/domain/Reader";
import { Writer } from "../../shared/domain/Writer";
import { UserEntity } from "../entities/UserEntity";

export default interface IUserRepository extends Reader<number, UserEntity>, Writer<number, UserEntity> {}