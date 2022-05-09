import { EntityService } from '../base-entity/service';
import { Script } from './models';

class ScriptService extends EntityService<Script> {
  constructor() {
    super({
      endpoint: '/scripts',
      entityName: 'script'
    });
  }
}

export const scriptService = new ScriptService();
