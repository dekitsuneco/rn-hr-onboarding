import { Expose } from 'class-transformer';

export class PaginationData {
  @Expose({ name: 'current_page' })
  public currentPage: number;

  @Expose({ name: 'per_page' })
  public perPage: number;

  @Expose({ name: 'last_page' })
  public lastPage: number;

  @Expose()
  public total: number;

  constructor(pagination?: Partial<PaginationData>) {
    Object.assign(this, pagination);
  }
}
