import { AnyAction } from 'deox';
import { Entity } from 'features/data/base-entity/config';
import { PaginationData } from 'features/data/pagination';
import { STORE_REF_TOKEN } from 'modules/store';
import { Dispatch } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'typedi';
import { BaseListedEntityActions, BaseListedEntitySelectors, BaseListedEntityState } from './store';

export abstract class BaseListedEntityFacade<
  TState extends BaseListedEntityState = BaseListedEntityState,
  TEntity extends Entity = Entity,
  TActions extends BaseListedEntityActions = BaseListedEntityActions,
  TSelectors extends BaseListedEntitySelectors<TEntity, TState> = BaseListedEntitySelectors<TEntity, TState>
> {
  public get pagination(): PaginationData {
    return useSelector(this.selectors.pagination);
  }

  public get items(): Array<TEntity> {
    return useSelector(this.selectors.items) as Array<TEntity>;
  }

  public get filter(): TState['filters'] {
    return useSelector(this.selectors.filters);
  }

  public get hasNextPage(): boolean {
    return useSelector(this.selectors.hasNextPage);
  }

  public get hasNoItems(): boolean {
    return useSelector(this.selectors.hasNoItems);
  }

  public get isLoading(): boolean {
    return useSelector(this.selectors.isLoading);
  }

  public get isRefreshing(): boolean {
    return useSelector(this.selectors.isRefreshing);
  }

  protected get storeRef(): { dispatch: Dispatch<AnyAction> } {
    return Container.get(STORE_REF_TOKEN);
  }

  constructor(protected actions: TActions, protected selectors: TSelectors) {}

  public changeSearchQuery(query: string): void {
    this.storeRef.dispatch(this.actions.changeSearchQuery({ query }));
  }

  public changeFilter(filter: TState['filters']): void {
    this.storeRef.dispatch(this.actions.changeFilter(filter));
  }

  public resetFilter(): void {
    this.storeRef.dispatch(this.actions.resetFilter());
  }

  public loadItems(page?: number, shouldReplaceItems?: boolean): void {
    this.storeRef.dispatch(this.actions.loadItems({ page, shouldReplaceItems }));
  }

  public deleteItem(item: TEntity): void {
    this.storeRef.dispatch(this.actions.deleteItem({ item }));
  }

  public refreshItems(): void {
    this.storeRef.dispatch(this.actions.refreshItems({ page: 1 }));
  }

  public resetState(): void {
    this.storeRef.dispatch(this.actions.resetState());
  }
}
