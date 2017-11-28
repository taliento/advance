import { EntityBase, IEntityBase } from './EntityBase';

export interface IUserDto extends IEntityBase {
  name : string;
  surname: string;
  email: string;
  totalCount:number;
}

export class UserDto extends EntityBase implements IUserDto {

  constructor(value: Object = {}) {
    super();
    Object.assign(this, value);
  }

  name : string = "";
  surname: string = "";
  email: string = "";
  totalCount:number;
}
