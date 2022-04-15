import React from 'react';
import { ReactElement, ReactNode } from 'react';
import { View } from 'react-native';
import { createStyles } from '@styles';
import { Icon } from 'ui-kit/icon';
import { AppText } from 'ui-kit/text';
import { AppButton } from 'ui-kit/button';
import { appHeaderFacade } from './facade';
import { commonStyle, variables } from '@styles';

interface Props {
  leftContent?: string | ReactNode;
  rightContent?: ReactNode;
  toggleDrawer: () => void;
}

export function AppHeader({ leftContent, rightContent, toggleDrawer }: Props): ReactElement {
  const handleGoBack = (): void => {
    appHeaderFacade.goBack();
  };

  const navBtn = appHeaderFacade.canGoBack() ? (
    <AppButton
      leftIcon={<Icon name='arrowLeft' />}
      gap={10}
      theme='tertiary'
      style={[commonStyle.flexCenter]}
      onPress={handleGoBack}
    />
  ) : (
    <AppButton
      leftIcon={<Icon name='menu' />}
      gap={10}
      theme='tertiary'
      style={[commonStyle.flexCenter]}
      onPress={toggleDrawer}
    />
  );

  const title = typeof leftContent === 'string' ? <AppText theme='textLargest'>{leftContent}</AppText> : leftContent;

  return (
    <View style={[commonStyle.borderSecondaryBottom, style.container]}>
      <View style={[commonStyle.flexCenter, style.navbarContainer]}>
        <View style={[style.navbar]}>{navBtn}</View>
        <View style={style.title}>{title}</View>
      </View>
      <View style={style.actionsContainer}>{rightContent}</View>
    </View>
  );
}

const style = createStyles({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 80,
    paddingVertical: 10,
    maxHeight: 130,
    height: 100
  },
  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionsContainer: {
    flexDirection: 'row'
  },
  subtitle: {
    color: variables.color.textTertiary,
    margin: 22
  },
  [`@media (max-width: ${variables.breakpoints.tablet})`]: {
    container: {
      maxHeight: 60,
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginHorizontal: 0
    },
    navbar: {
      marginRight: 10
    }
  }
});
