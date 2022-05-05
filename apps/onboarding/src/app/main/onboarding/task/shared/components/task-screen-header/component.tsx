import { AppHeader, HeaderButton } from '@shared/header';
import { createStyles } from '@styles';
import React from 'react';
import { View } from 'react-native';
import { AppText, TextTheme } from 'ui-kit/text';
import { useTranslation } from 'utils/i18n';

export function TaskScreenHeader(): JSX.Element {
  const translate = useTranslation('MAIN.ONBOARDING.TASK.SHARED');

  return (
    <AppHeader
      contentCenter={
        <View style={style.contentRight}>
          <AppText theme={TextTheme.MEDIUM}>{translate('TITLE_TASK_LIST', { taskCurrent: 2, taskTotal: 8 })}</AppText>
        </View>
      }
      contentRight={
        <View style={style.contentRight}>
          <HeaderButton iconName='chevronLeft' />
          <HeaderButton iconName='chevronRight' />
        </View>
      }
    />
  );
}

const style = createStyles({
  contentRight: {
    flexDirection: 'row'
  }
});
