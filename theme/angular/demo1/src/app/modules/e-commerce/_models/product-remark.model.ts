import { BaseModel } from '../../../_metronic/shared/crud-table';

export interface ProductRemark extends BaseModel {
  id: number;
  carId: number;
  text: string;
  type: number; // Info 1, Note 2, Reminder 3
  dueDate: string;
}
