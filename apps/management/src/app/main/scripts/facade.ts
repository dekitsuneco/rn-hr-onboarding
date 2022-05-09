import { BaseListedEntityFacade } from 'features/base-listed-entity-store';
import { Script } from 'features/data';
import { ScriptsListScreenState, scriptsListScreenActions, scriptsListScreenSelectors } from './shared/store';

export class ScriptsListFacade extends BaseListedEntityFacade<
  ScriptsListScreenState,
  Script,
  typeof scriptsListScreenActions,
  typeof scriptsListScreenSelectors
> {
  constructor() {
    super(scriptsListScreenActions, scriptsListScreenSelectors);
  }

  public editScript(): void {
    //TODO implement
  }

  public deleteScript(): void {
    //TODO implement
  }
}

export const scriptsListFacade = new ScriptsListFacade();
