import { AppState } from '@store';
import { BaseListedEntitySelectors } from 'features/base-listed-entity-store/store';
import { ScriptsListScreenState } from './state';

const selectFeature = (state: AppState): ScriptsListScreenState => state.scriptsListScreen;

class ScriptsListScreenSelectors extends BaseListedEntitySelectors {
  constructor() {
    super(
      selectFeature,
      'script'
    );
  }
}

export const scriptsListScreenSelectors = new ScriptsListScreenSelectors();
