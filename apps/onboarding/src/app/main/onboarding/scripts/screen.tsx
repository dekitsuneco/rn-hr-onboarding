import { RouteProp } from '@react-navigation/native';
import { commonStyle, createStyles, variables } from '@styles';
import React, { ReactElement, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { ExternalImage } from 'ui-kit/external-image';
import { AppText, TextTheme } from 'ui-kit/text';
import { useTranslation } from 'utils/i18n';
import { onboardingFacade } from '../facade';
import { OnboardingNavigationParams } from '../navigation';
import { onboardingStyle } from '../shared/styles';
import { TaskItem } from './components';
import { scriptFacade } from './facade';

interface Props {
  route?: RouteProp<OnboardingNavigationParams, 'Script'>;
}

export function ScriptScreen({ route }: Props): ReactElement {
  const translate = useTranslation('MAIN.ONBOARDING.SCRIPT');
  const { tasksTotal, title, completed, tasks } = route.params.script;

  useEffect(() => {
    scriptFacade.init();
  }, []);

  return (
    <View style={style.container}>
      <ScrollView contentContainerStyle={style.scrollContainer}>
        <ExternalImage style={style.image} uri={route.params.script.logo} />
        <View style={commonStyle.wrapper}>
          <View style={onboardingStyle.infoContainer}>
            <AppText theme={TextTheme.LARGEST}>{title}</AppText>
            <AppText theme={TextTheme.SMALLEST}>
              {onboardingFacade.translateScriptProgress(tasksTotal, completed)}
            </AppText>
            <AppText theme={TextTheme.SMALL} style={style.infoDescription}>
              Get aquainted with software and utilities that are required for your work and team communication.
            </AppText>
          </View>
          <AppText theme={TextTheme.SMALLEST} style={style.tasksSectionSubtitle}>
            {translate('TEXT_TASKS_SECTION')}
          </AppText>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              title={task.title}
              isCompleted={task.isCompleted}
              onPress={() => scriptFacade.navigateToTask(task)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const style = createStyles({
  container: {
    flex: 1,
    backgroundColor: variables.color.backgroundSecondary
  },
  scrollContainer: {
    paddingBottom: 100
  },
  image: {
    height: 200,
    width: '100%'
  },
  infoTitle: {
    marginBottom: 8
  },
  infoDescription: {
    marginTop: 24
  },
  tasksSectionSubtitle: {
    marginBottom: 13
  }
});
