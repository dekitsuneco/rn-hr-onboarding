import { appNavigationService } from 'modules/navigation';
import { useTranslation } from 'utils/i18n';
import { Script } from './scripts/models';

class OnboardingFacade {
  public init(): void {
    // TODO: implement this
  }

  public navigate(screen: string): void {
    appNavigationService.navigate(screen);
  }

  public goBack(): void {
    appNavigationService.goBack();
  }

  public navigateToScript(script: Script): void {
    appNavigationService.navigate('ScriptsScreen', { script });
  }

  public translateScriptProgress(tasksTotal: number, completed: number): string {
    const transtlate = useTranslation('MAIN.ONBOARDING');

    return completed > 0
      ? transtlate('TEXT_TASKS_COMPLETE', { tasksTotal, completed })
      : transtlate('TEXT_TASKS', { tasksTotal });
  }
}

export const onboardingFacade = new OnboardingFacade();
