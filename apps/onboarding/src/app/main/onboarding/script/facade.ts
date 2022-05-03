import { Task } from 'features/data';
import { appNavigationService } from 'features/navigation';

export class ScriptScreenFacade {
  public init(): void {
    //TODO: init
  }

  public navigateToTask(task: Task): void {
    appNavigationService.navigate('Task', { task });
  }
}

export const scriptScreenFacade = new ScriptScreenFacade();
