import { EntityService } from '../base-entity/service';
import { Script } from './models';

class ScriptService extends EntityService<Script> {
  // public create = this.notImplementedMethod('create');
  // public update = this.notImplementedMethod('update');
  // public delete = this.notImplementedMethod('update');

  constructor() {
    super({
      endpoint: '/scripts',
      entityName: 'script'
    });
  }
}

export const scriptService = new ScriptService();
