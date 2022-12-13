import { Reader } from '../../shared/domain/Reader';
import { Writer } from '../../shared/domain/Writer';
import { ExperienceEntity } from '../entities/ExperienceEntity';

export default interface IExperienceRepository extends Reader<number, ExperienceEntity>, Writer<number, ExperienceEntity> {}