import { BaseModel } from '../../../_metronic/shared/crud-table';

export interface ProductSpecification extends BaseModel {
  id: number;
  carId: number;
  specId: number;
  specName: string;
  value: string;
}
