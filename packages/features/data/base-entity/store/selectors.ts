import { isFunction } from 'lodash';
import { createSelector, Selector } from 'reselect';
import { createEntityInstance, Entities, EntitiesState, Entity, EntityName } from '../config';
import { entityNames } from './state';

const selectFeature = (state: any): EntitiesState => state.entityStore;
const castSelector = <TData>(dataOrSelector: TData | Selector<any, TData>): Selector<any, TData> => {
  return isFunction(dataOrSelector) ? dataOrSelector : () => dataOrSelector;
};
export class EntityItemsSelectors<TEntity extends Entity, TAppState = any> {
  public item = (itemID: TEntity['id'] | Selector<TAppState, TEntity['id']>) => {
    const selectID = castSelector<TEntity['id']>(itemID);

    return createSelector(
      selectFeature,
      selectID,
      (state, id) => createEntityInstance<TEntity>(
        this.entityName,
        state[this.entityName][id]
      )
    );
  };

  public items = (itemIDs: Array<TEntity['id']> | Selector<TAppState, Array<TEntity['id']>>) => {
    const selectIDs = castSelector<Array<TEntity['id']>>(itemIDs);

    return createSelector(
      selectFeature,
      selectIDs,
      (state, ids) => {
        const items: Array<TEntity> = [];
        ids.forEach((id) => {
          if (state[this.entityName][id]) {
            items.push(createEntityInstance<TEntity>(
              this.entityName,
              state[this.entityName][id]
            ));
          }
        });

        return items;
      }
    );
  };

  constructor(private entityName: EntityName) {}
}

type EntityStoreSelectors = { [key in EntityName]: EntityItemsSelectors<Entities[key]> };

function createSelectors(): EntityStoreSelectors {
  const result: Partial<EntityStoreSelectors> = {};
  entityNames.forEach((entityName) => {
    result[entityName] = new EntityItemsSelectors(entityName) as EntityItemsSelectors<any>;
  });

  return result as EntityStoreSelectors;
}

export const entityStoreSelectors = createSelectors();
