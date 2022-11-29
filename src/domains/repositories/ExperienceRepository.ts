import { Reader } from '../../shared/domain/Reader';
import { ExperienceEntity } from '../entities/ExperienceEntity';

export default interface IExperienceRepository extends Reader<number, ExperienceEntity> {}