import { Entity } from 'features/data/base-entity/config';
import { EntityService } from 'features/data/base-entity/service';
import { Epics } from 'modules/store/types';
import { ofType } from 'deox';
import { of } from 'rxjs';
import { catchError, debounceTime, map, switchMap, exhaustMap } from 'rxjs/operators';
import { BaseListedEntityActions } from './actions';
import { BaseListedEntitySelectors } from './selectors';
import { BaseListedEntityState } from './state';

export const baseListedEntityEpics: <
  TEntity extends Entity = Entity,
  TState extends BaseListedEntityState = BaseListedEntityState
>(
  actions: BaseListedEntityActions,
  selectors: BaseListedEntitySelectors<TEntity, TState>,
  entityService: EntityService<TEntity>
) => Epics = (actions, selectors, entityService) => ({
  loadItems: (action$, state$) => action$.pipe(
    ofType([actions.loadItems, actions.refreshItems]),
    switchMap((action) => entityService
      .search({
        ...(selectors.filters(state$.value) || {}),
        ...('payload' in action ? action.payload : {})
      })
      .pipe(
        map((response) => actions.loadItemsSuccess({ ...response, shouldReplaceItems: action.payload.shouldReplaceItems })),
        catchError((error) => of(actions.loadItemsFailure(error)))
      ))
  ),

  changeFilter: (action$) => action$.pipe(
    ofType([actions.changeFilter, actions.resetFilter]),
    map(() => actions.loadItems({ page: 1 }))
  ),

  changeSearchQuery: (action$) => action$.pipe(
    ofType(actions.changeSearchQuery),
    debounceTime(400),
    map(({ payload }) => actions.changeFilter(payload))
  ),

  deleteItem: (action$) => action$.pipe(
    ofType(actions.deleteItem),
    exhaustMap((action) => entityService.delete(action.payload.item.id).pipe(
      map(() => actions.deleteItemSuccess({ item: { id: action.payload.item.id } })),
      catchError((error) => of(actions.deleteItemFailure(error)))
    ))
  )
});
