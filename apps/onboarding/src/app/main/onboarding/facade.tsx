import { appNavigationService } from 'features/navigation';
import { useTranslation } from 'utils/i18n';
import { Script, User } from 'features/data';
import { ProfileSelectors } from 'features/profile';
import { useSelector } from 'react-redux';

class OnboardingFacade {
  public init(): void {
    // TODO: implement this
  }

  public get profile(): User {
    return useSelector(ProfileSelectors.profile);
  }

  public navigateToScript(script: Script): void {
    appNavigationService.navigate('Script', { script });
  }

  public translateScriptProgress(tasksTotal: number, completed: number): string {
    const translate = useTranslation('MAIN.ONBOARDING');

    return completed > 0
      ? translate('TEXT_TASKS_COMPLETE', { tasksTotal, completed })
      : translate('TEXT_TASKS', { tasksTotal });
  }
}

export const onboardingFacade = new OnboardingFacade();
