import { Entity } from 'features/data/base-entity/config';
import { PaginationData, PaginationRequest } from 'features/data/pagination';

export class BaseListedEntityState<
  TEntity extends Entity = Entity,
  TFilters extends Record<string, any> | PaginationRequest = Record<string, any>
> {
  public isLoading: boolean;
  public isRefreshing: boolean;
  public itemIDs: Array<TEntity['id']>;
  public pagination: PaginationData;
  public filters: TFilters;

  constructor(initialFilters?: TFilters) {
    this.itemIDs = [];
    this.pagination = new PaginationData();
    this.isLoading = true;
    this.isRefreshing = false;
    if (initialFilters) {
      this.filters = initialFilters;
    }
  }
}
