import { BaseListedEntityActions } from 'features/base-listed-entity-store/store';
import { ScriptsListScreenState } from './state';

class ScriptsListScreenActions extends BaseListedEntityActions<ScriptsListScreenState> {
  constructor() {
    super(
      'Scripts List Screen',
      'script'
    );
  }
}

export const scriptsListScreenActions = new ScriptsListScreenActions();
