import { BaseModel } from '../../../_metronic/shared/crud-table';

export interface Product extends BaseModel {
  id: number;
  model: string;
  manufacture: string;
  modelYear: number;
  mileage: number;
  description: string;
  color: string;
  price: number;
  condition: number;
  status: number;
  VINCode: string;
}
