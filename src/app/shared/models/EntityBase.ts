export interface IEntityBase {
  id : number;
  count : number;
  edit : boolean;
}

export class EntityBase implements IEntityBase {
  id : number;
  count : number = 0;
  edit : boolean = false;
}
