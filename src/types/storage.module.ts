import { StatusType } from "./status.module";

export type StorageType = {
    deviceName: string;
    diskUtilization: string;
    diskUsage: string;
    status: StatusType;
    usedBy: number;
    manage: string;
}