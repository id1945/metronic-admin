import { BaseModel } from '../../../_metronic/shared/crud-table';

export interface Customer extends BaseModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  gender: string;
  status: number; // Active = 1 | Suspended = 2 | Pending = 3
  dateOfBbirth: string;
  dob: Date;
  ipAddress: string;
  type: number; // 1 = Business | 2 = Individual
}
