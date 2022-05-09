import { Epics } from '@store';
import { baseListedEntityEpics } from 'features/base-listed-entity-store/store';
import { scriptService } from 'features/data';
import { scriptsListScreenActions } from './actions';
import { scriptsListScreenSelectors } from './selectors';

export const scriptsListScreenEpics: Epics = {
  ...baseListedEntityEpics(scriptsListScreenActions, scriptsListScreenSelectors, scriptService)
};
