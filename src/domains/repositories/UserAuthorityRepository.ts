import { Reader } from "../../shared/domain/Reader";
import { Writer } from "../../shared/domain/Writer";

export default interface IUserAuthorityRepository extends Reader<number, number>, Writer<number, number> {}