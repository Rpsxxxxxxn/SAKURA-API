import { Reader } from "../../shared/domain/Reader";
import { Writer } from "../../shared/domain/Writer";
import {RankingEntity} from "../entities/RankingEntity";

export default interface IRankingRepository extends Reader<number, RankingEntity>, Writer<number, RankingEntity> {}