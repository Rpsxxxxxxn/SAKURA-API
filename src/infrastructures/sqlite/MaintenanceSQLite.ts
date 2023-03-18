import { MaintenanceEntity } from "../../domains/entities/MaintenanceEntity";
import IMaintenanceRepository from "../../domains/repositories/MaintenanceRepository";

class MaintenanceSQLite implements IMaintenanceRepository {
    findAll(): Promise<MaintenanceEntity[]> {
        throw new Error("Method not implemented.");
    }
    find(id: number): Promise<MaintenanceEntity> {
        throw new Error("Method not implemented.");
    }
    insert(value: MaintenanceEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(value: MaintenanceEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    remove(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export default MaintenanceSQLite;