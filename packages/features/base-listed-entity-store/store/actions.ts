import { Entity, EntityName } from 'features/data/base-entity/config';
import { EntityStoreActions } from 'features/data/base-entity/store';
import { EntityPartial } from 'features/data/base-entity/types';
import { PaginationResponse } from 'features/data/pagination';
import { action, actionWithPayload } from 'modules/store';
import { AxiosError } from 'axios';
import { BaseListedEntityState } from './state';

export abstract class BaseListedEntityActions<
  TState extends BaseListedEntityState = BaseListedEntityState,
  TEntity extends Entity = Entity
> extends EntityStoreActions {
  public resetState = action(
    `[${this.storeTag}] Reset state`
  );

  public refreshItems = actionWithPayload<{ page?: number } & TState['filters']>(
    `[${this.storeTag}] Refresh items`
  );

  public loadItems = actionWithPayload<{ page?: number; shouldReplaceItems?: boolean } & TState['filters']>(
    `[${this.storeTag}] Load items`
  );

  public loadItemsSuccess = actionWithPayload<PaginationResponse<TEntity> & { shouldReplaceItems?: boolean }>(
    `[${this.storeTag}] Load items success`
  );

  public loadItemsFailure = actionWithPayload<AxiosError>(
    `[${this.storeTag}] Load items failure`
  );

  public changeFilter = actionWithPayload<TState['filters']>(
    `[${this.storeTag}] Change filter`
  );

  public resetFilter = action(
    `[${this.storeTag}] Reset filter`
  );

  public changeSearchQuery = actionWithPayload<{ query: string }>(
    `[${this.storeTag}] Change search query`
  );

  public deleteItem = actionWithPayload<{ item: TEntity }>(
    `[${this.storeTag}] Delete item`
  );

  public deleteItemSuccess = actionWithPayload<{ item: { id: TEntity['id'] } & Partial<TEntity> }>(
    `[${this.storeTag}] Delete item success`
  );

  public deleteItemFailure = actionWithPayload<{ item: TEntity; error: AxiosError }>(
    `[${this.storeTag}] Delete item failure`
  );

  public updateItem = actionWithPayload<{ item: EntityPartial<TEntity> }>(
    `[${this.storeTag}] Update item`
  );

  public updateItemSuccess = actionWithPayload<{ item: EntityPartial<TEntity> }>(
    `[${this.storeTag}] Update item success`
  );

  public updateItemFailure = actionWithPayload<{ item: EntityPartial<TEntity>; error: AxiosError }>(
    `[${this.storeTag}] Update item failure`
  );

  constructor(
public readonly storeTag: string, public readonly entityName: EntityName
  ) {
    super(
      entityName
    );
  }
}
