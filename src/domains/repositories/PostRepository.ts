import { Reader } from "../../shared/domain/Reader";
import { Writer } from "../../shared/domain/Writer";
import { PostEntity } from "../entities/PostEntity";

export default interface IPostRepository extends Reader<number, PostEntity>, Writer<number, PostEntity> {}