import { AppState } from '@store';
import { BaseListedEntitySelectors } from 'features/base-listed-entity-store/store';
import { createSelector } from 'reselect';
import { ScriptsListScreenState } from './state';

const selectFeature = (state: AppState): ScriptsListScreenState => state.scriptsListScreen;

class ScriptsListScreenSelectors extends BaseListedEntitySelectors {
  public static perPage = createSelector(
    selectFeature,
    (state) => state.perPage
  );

  constructor() {
    super(
      selectFeature,
      'script'
    );
  }
}

export const scriptsListScreenSelectors = new ScriptsListScreenSelectors();
