import { EntityBase, IEntityBase } from './EntityBase';

export interface IProductDto extends IEntityBase {
  name : string;
  title: string;
  description:string;
  partners: any[];
  totalCount:number;
}

export class ProductDto extends EntityBase implements IProductDto {

  constructor(value: Object = {}) {
    super();
    Object.assign(this, value);
  }

  name : string = "";
  title: string = "";
  description:string;
  partners: any[];
  totalCount:number;
}
