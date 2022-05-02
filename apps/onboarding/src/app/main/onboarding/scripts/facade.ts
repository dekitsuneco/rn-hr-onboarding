import { Task } from 'features/data';
import { appNavigationService } from 'features/navigation';

export class ScriptFacade {
  public init(): void {
    //TODO: init
  }

  public navigateToTask(task: Task): void {
    appNavigationService.navigate('Task', { task });
  }
}

export const scriptFacade = new ScriptFacade();
