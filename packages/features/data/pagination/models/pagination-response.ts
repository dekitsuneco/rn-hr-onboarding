import { ClassConstructor, Exclude, Type } from 'class-transformer';
import { PaginationData } from './pagination-data';

export class PaginationResponse<TEntity extends object = object> extends PaginationData {
  @Type((options) => {
    return (options.newObject as PaginationResponse<TEntity>).type;
  })
  public data: Array<TEntity>;

  @Exclude()
  private type?: ClassConstructor<TEntity>;

  constructor(type: ClassConstructor<TEntity>) {
    super();
    this.type = type;
  }
}
