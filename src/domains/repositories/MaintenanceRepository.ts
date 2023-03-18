import { Reader } from '../../shared/domain/Reader';
import { Writer } from '../../shared/domain/Writer';
import { MaintenanceEntity } from '../entities/MaintenanceEntity';

export default interface IMaintenanceRepository extends Reader<number, MaintenanceEntity>, Writer<number, MaintenanceEntity> {}